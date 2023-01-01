import { Button } from "@fullpower-stack/ui";

import { NextPageWithLayout } from "./_app";
import { inferProcedureInput } from "@trpc/server";
import Link from "next/link";
import { trpc } from "../services/trpc";
import { Fragment, useEffect } from "react";
import type { AppRouter } from "@fullpower-stack/express-backend";
import { Post } from "../components/Post";

const IndexPage: NextPageWithLayout = () => {
  const utils = trpc.useContext();
  const postsQuery = (trpc.post.list as any).useInfiniteQuery(
    {
      limit: 5,
    },
    {
      getPreviousPageParam(lastPage) {
        return lastPage?.nextCursor;
      },
    }
  );

  const addPost = trpc.post.add.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      await utils.post.list.invalidate();
    },
  });

  // prefetch all posts for instant navigation
  useEffect(() => {
    const allPosts =
      postsQuery.data?.pages?.flatMap((page) => page.items) ?? [];
    for (const { id } of allPosts) {
      void utils.post.byId.prefetch({ id });
    }
  }, [postsQuery.data, utils]);

  return (
    <>
      <h2>
        Latest Posts
        {postsQuery.status === "loading" && "(loading)"}
      </h2>

      <button
        onClick={() => postsQuery.fetchPreviousPage()}
        disabled={
          !postsQuery.hasPreviousPage || postsQuery.isFetchingPreviousPage
        }
      >
        {postsQuery.isFetchingPreviousPage
          ? "Loading more..."
          : postsQuery.hasPreviousPage
          ? "Load More"
          : "Nothing more to load"}
      </button>

      {postsQuery.data?.pages.map((page, index) => (
        <Fragment key={page?.items[0]?.id || index}>
          {page?.items.map((item) => (
            <article key={item.id}>
              <Post
                title={item.title}
                createdAt={item.createdAt.toLocaleDateString("en-us")}
                content={item.content}
                id={item.id}
              />
            </article>
          ))}
        </Fragment>
      ))}

      <hr />

      <h3>Add a Post</h3>

      <form
        onSubmit={async (e) => {
          /**
           * In a real app you probably don't want to use this manually
           * Checkout React Hook Form - it works great with tRPC
           * @see https://react-hook-form.com/
           * @see https://kitchen-sink.trpc.io/react-hook-form
           */
          e.preventDefault();
          const $form = e.currentTarget;
          const values = Object.fromEntries(new FormData($form));
          type Input = inferProcedureInput<AppRouter["post"]["add"]>;
          //    ^?
          const input: Input = {
            title: values.title as string,
            content: values.text as string,
          };
          try {
            await addPost.mutateAsync(input);

            $form.reset();
          } catch (cause) {
            console.error({ cause }, "Failed to add post");
          }
        }}
      >
        <label htmlFor="title">Title:</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          disabled={addPost.isLoading}
        />

        <br />
        <label htmlFor="text">Text:</label>
        <br />
        <textarea id="text" name="text" disabled={addPost.isLoading} />
        <br />
        <input type="submit" disabled={addPost.isLoading} />
        {addPost.error && (
          <p style={{ color: "red" }}>{addPost.error.message}</p>
        )}
      </form>
    </>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };

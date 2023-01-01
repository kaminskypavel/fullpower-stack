import Error from "next/error";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import { RouterOutput, trpc } from "../../services/trpc";
import { useEffect, useRef } from "react";

type PostByIdOutput = RouterOutput["post"]["byId"];

function PostItem(props: { post: PostByIdOutput }) {
  const { post } = props;
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Raw data:</h2>
      <pre>{JSON.stringify(post, null, 4)}</pre>
    </>
  );
}

const PostViewPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!router.isReady) return <></>;
  const postQuery = trpc.post.byId.useQuery({ id: +id });

  if (postQuery.error) {
    return (
      <Error
        title={postQuery.error.message}
        statusCode={(postQuery.error.data as any)?.httpStatus ?? 500}
      />
    );
  }

  if (postQuery.status !== "success") {
    return <>Loading...</>;
  }
  const { data } = postQuery;
  return <PostItem post={data} />;
};

export default PostViewPage;

export const getServerSideProps = async ({ params, res }) => {
  const { id } = params;
  if (!id || isNaN(+id)) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }
  return { props: {} };
};

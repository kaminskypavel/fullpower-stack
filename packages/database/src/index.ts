import { createPostInputSchema } from "@fullpower-stack/schema";
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from "zod";

const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  content: true,
  createdAt: true,
});

export class Database {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async $disconnect() {
    await this.prisma.$disconnect();
  }

  async listUsers(reverse = false) {
    const users = await this.prisma.user.findMany({
      orderBy: { id: reverse ? "desc" : "asc" },
    });
    return users;
  }

  async createUser(name: string, email: string) {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return user;
  }
  async createPost(data: z.infer<typeof createPostInputSchema>) {
    const post = await this.prisma.post.create({
      data,
    });
    return post;
  }
  async findPostById(id: number) {
    const post = await this.prisma.post.findUnique({
      select: defaultPostSelect,
      where: { id },
    });
    if (!post) throw new Error("Post not found");
    return post;
  }
  async listPosts(input: {
    skip?: number;
    take?: number;
    limit?: number;
    cursor?: number | null;
  }) {
    /**
     * For pagination docs you can have a look here
     * @see https://trpc.io/docs/useInfiniteQuery
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/pagination
     */

    const limit = input.limit ?? 50;
    const { cursor } = input;

    const items = await this.prisma.post.findMany({
      select: defaultPostSelect,
      // get an extra item at the end which we'll use as next cursor
      take: limit + 1,
      where: {},
      cursor: cursor
        ? {
            id: cursor,
          }
        : undefined,
      orderBy: {
        createdAt: "desc",
      },
    });
    let nextCursor: typeof cursor | undefined = undefined;
    if (items.length > limit) {
      // Remove the last item and use it as next cursor

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const nextItem = items.pop()!;
      nextCursor = nextItem.id;
    }

    return {
      items: items.reverse(),
      nextCursor,
    };
  }
}

export * from "@prisma/client";

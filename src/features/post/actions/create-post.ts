"use server";

import { POSTS } from "@/lib/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  await prisma.post.create({
    data: {
      title: data.title as string,
      body: data.body as string,
    },
  });

  revalidatePath(POSTS);
};

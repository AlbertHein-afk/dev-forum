import notFound from "@/app/not-found";
import EditPostForm from "@/features/post/components/edit-post-form";
import { getPost } from "@/features/post/queries/get-post";
import { Post } from "../../../../../generated/prisma/client";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

const EditPostPage = async ({ params }: EditPostPageProps) => {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return <EditPostForm post={post as Post} />;
};

export default EditPostPage;

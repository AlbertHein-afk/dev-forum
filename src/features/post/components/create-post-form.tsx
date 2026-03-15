"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/features/post/actions/create-post";
import SubmitButton from "@/components/submit-button";
import { useActionState } from "react";

function CreatePostFrom() {
  const [actionState, formAction] = useActionState(createPost, { message: "" });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>This will be create new post</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              defaultValue={(actionState.payload?.get("title") as string) ?? ""}
            />
          </div>

          <div>
            <Label htmlFor="body">Description</Label>
            <Textarea
              id="body"
              name="body"
              defaultValue={(actionState.payload?.get("body") as string) ?? ""}
            />
          </div>

          <SubmitButton label="Update Post" />
        </form>
        <span>{actionState.message}</span>
      </CardContent>
    </Card>
  );
}

export default CreatePostFrom;

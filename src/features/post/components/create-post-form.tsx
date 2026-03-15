import SubmitButton from "@/components/submit-button";

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

function CreatePostFrom() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>This will be create new post</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createPost} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" />
          </div>

          <div>
            <Label htmlFor="body">Description</Label>
            <Textarea id="body" name="body" />
          </div>

          <SubmitButton label="Update Post" />
        </form>
      </CardContent>
    </Card>
  );
}

export default CreatePostFrom;

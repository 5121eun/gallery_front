import { POST_CREATE_TITLE } from "@/app/lib/constants";
import PostCreateForm from "@/app/ui/post/create/post-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: POST_CREATE_TITLE
};

export default function Page() {
    return (
        <main className="flex justify-center">
            <PostCreateForm />
        </main>
    )
}
import PostCreateForm from "@/app/ui/post/create/post-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Post Create'
};

export default function Page() {
    return (
        <main className="flex justify-center">
            <PostCreateForm />
        </main>
    )
}
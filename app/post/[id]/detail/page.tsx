import { get_post } from "@/app/lib/actions";
import PostDetailForm from "@/app/ui/post/detail/post-detail-form";
import PostDetailSkeleton from "@/app/ui/post/detail/post-detail-skeleton";
import { Suspense } from "react";

export default async  function Page({ params }: { params: {id: string} }) {
    const post = await get_post(Number(params.id));

    return (
        <main className="flex justify-center">
            <Suspense fallback={<PostDetailSkeleton />}>
                <PostDetailForm post={post}/>
            </Suspense>
        </main>
    )
}
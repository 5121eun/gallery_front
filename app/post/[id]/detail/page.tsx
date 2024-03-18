import PostDetailForm from "@/app/ui/post/detail/post-detail-form";
import PostDetailSkeleton from "@/app/ui/post/detail/post-detail-skeleton";
import { Suspense } from "react";

export default async  function Page({ params }: { params: {id: string} }) {

    return (
        <main className="flex justify-center">
            <Suspense fallback={<PostDetailSkeleton />}>
                <PostDetailForm id={params.id}/>
            </Suspense>
        </main>
    )
}
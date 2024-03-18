import PostDetailForm from "@/app/ui/post/detail/post-detail-form";
import PostDetailSkeleton from "@/app/ui/post/detail/post-detail-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'Post Detail'
};

export default async  function Page({ params }: { params: {id: string} }) {

    return (
        <main className="flex justify-center">
            <Suspense fallback={<PostDetailSkeleton />}>
                <PostDetailForm id={params.id}/>
            </Suspense>
        </main>
    )
}
import { API_SERVER } from "@/app/lib/actions";
import PostDetailForm from "@/app/ui/post/detail/post-detail-form";
import PostDetailSkeleton from "@/app/ui/post/detail/post-detail-skeleton";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(
    { params }: { params: {id: string} },
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    const id = params.id
    const post = await fetch(`${API_SERVER}/post/${id}`).then((res) => res.json())
   
    return {
      title: 'Post Detail',
      openGraph: {
        images: [post.image],
        description: post.tags
      },
    }
  }

export default async  function Page({ params }: { params: {id: string} }) {

    return (
        <main className="flex justify-center">
            <Suspense fallback={<PostDetailSkeleton />}>
                <PostDetailForm id={params.id}/>
            </Suspense>
        </main>
    )
}
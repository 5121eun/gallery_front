import { Suspense, } from "react";
import Gallery from "./ui/gallery";
import Search from "./ui/search";
import GallerySkeleton from "./ui/gallery-skeleton";
import { Metadata, ResolvingMetadata } from "next";
import { API_SERVER } from "./lib/actions";

export async function generateMetadata(
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    const post = await fetch(`${API_SERVER}/post/33`).then((res) => res.json())
   
    return {
      title: 'Gallery',
      openGraph: {
        images: [post.image],
        description: 'Share your photo'
      },
    }
  }
  
export default async function Home({
    searchParams,
}: {
    searchParams?:{
        query?: string;
        page?: string;
    }
}) {
    
    return (
        <main className="flex flex-col space-y-5 items-center">
            <Search />
            <Suspense fallback={<GallerySkeleton />}>
                <Gallery page={Number(searchParams?.page) | 1} query={searchParams?.query}/>
            </Suspense>
        </main>
    );
}

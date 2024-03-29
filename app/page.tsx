import { Suspense, } from "react"
import Gallery from "./ui/gallery"
import Search from "./ui/search"
import GallerySkeleton from "./ui/gallery-skeleton"
import { Metadata } from "next"
import { API_SERVER, TITLE } from "./lib/constants"

export async function generateMetadata(
  ): Promise<Metadata> {

    // post api 호출
    const post = await fetch(`${API_SERVER}/post/33`).then((res) => res.json())
   
    return {
      title: TITLE,
      openGraph: {
        images: [post.image],
        description: 'Share your photo'
      },
    }
  }
  
export default async function Home({ searchParams }: { searchParams?: { query?: string; page?: string; }}) {
    return (
        <main className="flex flex-col space-y-5 items-center">
            <Search />
            <Suspense fallback={<GallerySkeleton />}>
                <Gallery page={Number(searchParams?.page) | 1} query={searchParams?.query}/>
            </Suspense>
        </main>
    );
}

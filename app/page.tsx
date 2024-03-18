import { Suspense, } from "react";
import Gallery from "./ui/gallery";
import Search from "./ui/search";
import GallerySkeleton from "./ui/gallery-skeleton";

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

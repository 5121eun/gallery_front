import { Suspense, } from "react";
import Gallery from "./ui/gallery";
import { Post } from "./lib/definitions";
import { getPosts } from "./lib/actions";
import Search from "./ui/search";
import Logo from "./ui/logo";

export default async function Home({
    searchParams,
}: {
    searchParams?:{
        query?: string;
        page?: string;
    }
}) {
    const posts = await getPosts(Number(searchParams?.page) || 1, searchParams?.query);

    return (
        <main className="flex flex-col space-y-5 items-center">
            <Search />
            <Suspense>
                <Gallery posts={posts}/>
            </Suspense>
        </main>
    );
}

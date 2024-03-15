"use client"

import { useEffect, useState } from "react";
import Gallery from "./ui/gallery";
import { Post } from "./lib/definitions";
import { getPosts } from "./lib/actions";
import Search from "./ui/search";

export default function Home() {
    const [ posts, setPosts] = useState<Post[]>([]);

    // get default posts
    useEffect(() => {   
      requestPosts(1, []);
    }, [])

    // call getPosts api
    async function requestPosts(page: number, tags: string[]) {
        const posts = await getPosts(page, tags);
        setPosts(posts);
      }
    
    // call getPosts api with search value
    function handleSearch(value: string) {
        requestPosts(1, value.length < 1? []: value.split(', '));        
    }

    return (
        <main className="flex flex-col space-y-5 items-center">
            <Search onSearch={handleSearch}/>
            <Gallery posts={posts}/>
        </main>
    );
}

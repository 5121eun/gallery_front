"use client"

import { useEffect, useState } from "react";
import Gallery from "./ui/gallery";
import { Post } from "./lib/definitions";
import { getPosts } from "./lib/actions";

export default function Home() {
    const [ posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {   
    requestPosts(1, []);
  }, [])

  async function requestPosts(page: number, tags: string[]) {
      const posts = await getPosts(page, tags);
      setPosts(posts);
    }
  
  return (
    <main className="flex min-h-screen flex-col m-5">
      <Gallery posts={posts}/>
    </main>
  );
}

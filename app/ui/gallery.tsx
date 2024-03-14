"use client"

import Card from "./card";
import { Post } from "@/app/lib/definitions";

interface GalleryProps {
    posts: Post[];
}

export default function Gallery( { posts } : GalleryProps) {
    const post_rendering = (posts: Post[]) => {
        const result = [];
        for (let i = 0 ; i < 7 ; i++) {
            result.push(<div key={i} className="grid gap-4">
                {posts.slice(i * 3, (i * 3) + 3).map((post) => {
                    return (
                        <Card key={post.id}  post={post} />
                    )
                })}
            </div>);
        }
        return result;
    }

    return (
        <div className="flex grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-5">
            {post_rendering(posts)}
        </div>
    )
}
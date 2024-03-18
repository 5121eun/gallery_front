import { getPosts } from "../lib/actions";
import Card from "./card";
import { Post } from "@/app/lib/definitions";

interface GalleryProps {
    page: number;
    query: string | undefined;
}

export default async function Gallery({ page, query }: GalleryProps) {
    const posts = await getPosts(Number(page) | 1, query);

    const post_rendering = (posts: Post[]) => {
        const result = [];
        for (let i = 0 ; i < 4 ; i++) {
            result.push(<div key={i} className="grid gap-4">
                {posts.slice(i * 4, (i * 4) + 4).map((post) => {
                    return (
                        <Card key={post.id}  post={post} />
                    )
                })}
            </div>);
        }
        return result;
    }

    return (
        <div className="flex w-full grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-5">
            {post_rendering(posts)}
        </div>
    )
}
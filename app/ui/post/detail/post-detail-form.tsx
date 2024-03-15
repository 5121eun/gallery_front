"use client"

import Tags from "@/app/ui/post/tags";
import { Post,  } from "@/app/lib/definitions";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { get_post } from "@/app/lib/actions";
import Chip from "@/app/ui/post/chip";
import Back from "@/app/ui/svg/back";
import Edit from "@/app/ui/svg/edit";

interface PostDetailProps {
    id: number;
}

export default function PostDetailForm({ id }: PostDetailProps){
    const [ post, setPost] = useState<Post|null>(null);

    useEffect(() => {
        request_post(id);
    }, [])

    async function request_post(id: number) {
        const post = await get_post(id);
        setPost(post);
    }

    return (
            <div 
                className="flex flex-col w-full">
                    <div className="flex flex-row items-center">
                        <Back />
                        <div className="ml-auto">
                            <Edit />
                        </div>
                    </div>
                {post && 
                    <div className="space-y-1 mt-5">
                        <div className="flex flex-row items-center">
                            <label className="w-1/12 text-gray-500 dark:text-gray-400">날짜:</label>
                            <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-1/12 text-gray-500 dark:text-gray-400">태그:</label>
                            <Tags old_tags={post.tags} readonly={true}/>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="min-w-1/12"></div>
                            <Image 
                                src={post.image}
                                width={720}
                                height={560}
                                className="h-auto max-w-full hover:opacity-50"
                                alt="image"
                            />
                        </div>
                    </div>
                }
            </div>
    )
}
"use client"

import Tags from "@/app/ui/post/tags";
import { Post,  } from "@/app/lib/definitions";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { get_post } from "@/app/lib/actions";
import Back from "@/app/ui/svg/back";
import Edit from "@/app/ui/svg/edit";
import Container from "@/app/ui/container";
import DivRow from "../../div-row";
import Title from "../../title";

interface PostDetailProps {
    post: Post | null;
}

export default async function PostDetailForm({ post }: PostDetailProps){
    return (
            <Container>
                    <DivRow className="justify-between">
                        <Back />
                        <Title>Post Detail</Title>
                        <Edit />
                    </DivRow>
                {post && 
                    <>
                        <DivRow>
                            <label className="w-1/12">날짜:</label>
                            <p>{post.date}</p>
                        </DivRow>
                        <DivRow>
                            <label className="w-1/12">태그:</label>
                            <Tags old_tags={post.tags} readonly={true}/>
                        </DivRow>
                        <Image 
                            src={post.image}
                            width={720}
                            height={560}
                            className="hover:opacity-50"
                            alt="image"
                            />
                    </>
                }
            </Container>
    )
}
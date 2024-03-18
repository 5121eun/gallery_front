"use client"

import Back from "@/app/ui/svg/back";
import Container from "@/app/ui/container";
import DivRow from "../../div-row";
import Title from "../../title";
import ImageSkeleton from "../../image-skeleton";
import { POST_DETAIL_TITLE } from "@/app/lib/constants";

export default async function PostDetailSkeleton() {
    return (
            <Container>
                    <DivRow className="justify-between">
                        <Back />
                        <Title>{POST_DETAIL_TITLE}</Title>
                        <p />
                    </DivRow>
                    <div className="h-6 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-6 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <ImageSkeleton className="w-720 h-560" />
            </Container>
    )
}
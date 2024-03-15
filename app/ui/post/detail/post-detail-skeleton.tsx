"use client"

import Back from "@/app/ui/svg/back";
import Container from "@/app/ui/container";
import DivRow from "../../div-row";
import Title from "../../title";
import ImageSkeleton from "../../image-skeleton";

export default async function PostDetailSkeleton() {
    return (
            <Container>
                    <DivRow className="justify-between">
                        <Back />
                        <Title>Post Detail</Title>
                        <p />
                    </DivRow>
                    <div className="h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                    <ImageSkeleton className="w-720 h-520" />
            </Container>
    )
}
import Tags from "@/app/ui/post/tags";
import Image from 'next/image'
import Back from "@/app/ui/svg/back";
import Edit from "@/app/ui/svg/edit";
import Container from "@/app/ui/container";
import DivRow from "../../div-row";
import Title from "../../title";
import { get_post } from "@/app/lib/actions";
import { POST_DETAIL_TITLE } from "@/app/lib/constants";
import PostDetailSkeleton from "./post-detail-skeleton";
import ImageSkeleton from "../../image-skeleton";

interface PostDetailProps {
    id: string
}

export default async function PostDetailForm({ id }: PostDetailProps){
    const post = await get_post(Number(id));

    return (
            <Container>
                <DivRow className="justify-between">
                    <Back />
                    <Title>{POST_DETAIL_TITLE}</Title>
                    <p />
                </DivRow>
                <DivRow>
                    <label className="w-1/12">날짜:</label>
                    <p>{post?.date}</p>
                </DivRow>
                <DivRow>
                    <label className="w-1/12">태그:</label>
                    <Tags old_tags={post?.tags === undefined? [] : post?.tags} readonly={true}/>
                </DivRow>
                <Image 
                    src={post?.image === undefined? "" : post.image}
                    width={720}
                    height={560}
                    className="block"
                    alt="image"
                    style={{ width: '720px', height: '560px' }}
                />
            </Container>

    )
}
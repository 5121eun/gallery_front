import Tags from "@/app/ui/post/tags"
import Image from 'next/image'
import Back from "@/app/ui/svg/back"
import Container from "@/app/ui/container"
import DivRow from "@/app/ui/div-row"
import Title from "@/app/ui/title"
import { get_post } from "@/app/lib/actions"
import { POST_DETAIL_TITLE } from "@/app/lib/constants"

interface PostDetailProps {
    id: string
}

export default async function PostDetailForm({ id }: PostDetailProps){
    // post api 호출
    const post = await get_post(Number(id))

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
                <div style={{ position: 'relative', width: '720px', height: '520px' }}>
                    <Image
                        src={post?.image === undefined? "" : post.image}
                        alt="Picture of the author"
                        sizes="500px"
                        fill
                        style={{
                        objectFit: 'contain',
                        }}
                    />
                </div>
        </Container>
    )
}
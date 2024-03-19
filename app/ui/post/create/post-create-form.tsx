"use client"

import Tags from "@/app/ui/commons/tags"
import DropZone from "@/app/ui/commons/dropzone"
import { create_post } from "@/app/lib/actions"
import { useFormState } from "react-dom"
import { ServerResponse } from "@/app/lib/definitions"
import Button from "@/app/ui/commons/button"
import Container from "@/app/ui/commons/container"
import DivRow from "@/app/ui/commons/div-row"
import Title from "@/app/ui/commons/title"
import { redirect } from "next/navigation"
import { POST_CREATE_TITLE } from "@/app/lib/constants"

export default function PostCreateForm(){
    const [ response, formAction] = useFormState(requestCreatePost, null)

    // post 업로드 API 호출
    async function requestCreatePost(state: any, formData: FormData): Promise<ServerResponse>{
        
        // form의 tags[] value 모두 가져와서 배열로 전달
        formData.getAll('tags[]').map((tag, index) => {
            formData.append(`tags[${index}]`, tag)
        })
        const response = await create_post(formData)
        
        // 업로드 성공 시 post detail 페이지로 리다이렉트
        if (response?.status == 201) {
            redirect(`/post/${response.message}/detail`)
        }

        return response
    }

    return (
        <form action={formAction} encType="multipart/form-data">
            <Container>
                <Title>{POST_CREATE_TITLE}</Title>
                <DivRow>
                    <label className="w-1/12">태그:</label>
                    <Tags old_tags={[]}/>
                </DivRow>
                <DropZone />
                <Button className="w-full" type="submit">업로드</Button>
            </Container>
        </form>
    )
}
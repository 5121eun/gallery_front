"use client"

import Tags from "@/app/ui/post/tags";
import DropZone from "../dropzone";
import { create_post } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { ServerResponse } from "@/app/lib/definitions";
import Button from "@/app/ui/button";
import Container from "@/app/ui/container";
import DivRow from "@/app/ui/div-row";

export default function PostCreateForm(){
    const [ response, formAction] = useFormState(requestCreatePost, null);

    async function requestCreatePost(state: any, formData: FormData): Promise<ServerResponse>{
        
        formData.getAll('tags[]').map((tag, index) => {
            formData.append(`tags[${index}]`, tag)
        })
        const response = await create_post(state, formData);
        
        if (response?.status == 200) {
            console.log("success")
        }

        return response;
    }

    return (
            <form className="space-y-6" action={formAction} encType="multipart/form-data">
                <Container>
                    <DivRow>
                        <label className="w-1/12 text-gray-500 dark:text-gray-400">태그:</label>
                            <Tags old_tags={[]}/>
                    </DivRow>
                    <DropZone />
                    <Button className="w-10/12" type="submit">업로드</Button>
                </Container>
            </form>
    )
}
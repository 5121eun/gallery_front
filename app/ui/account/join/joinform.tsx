"use client"

import Button from "@/app/ui/button";
import Input from "@/app/ui/input";

import { useFormState } from "react-dom";
import { join } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { ServerResponse } from "@/app/lib/definitions";
import Container from "@/app/ui/container";

export default function JoinForm() {
    const [ response, formAction] = useFormState(requestJoin, null);

    async function requestJoin(state: any, formData: FormData): Promise<ServerResponse> {
        const response = await join(formData);
        
        if (response?.status == 201) {
            redirect("/account/login");
        }

        return response;
    }

    return (
        <Container>
            <form action={formAction}>
                <Input name="username" placeholder="User Name" message={response == null? "사용자 이름을 3자 이상 입력해 주세요." : response?.message} status={response != null? false : undefined} />
                <Input type="email" name="email" placeholder="email" message="Email 주소를 입력해 주세요."/>
                <Input type="password" name="password" placeholder="password" message="사용하실 비밀번호를 입력해 주세요."/>
                <Input type="password" name="password_check" placeholder="password check" message="비밀번호를 다시 입력해 주세요."/>
                <Button type="submit" className="w-full">Join</Button>
            </form>
        </Container>
    )
}

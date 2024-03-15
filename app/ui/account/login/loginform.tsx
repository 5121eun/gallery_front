"use client"

import { useFormState } from "react-dom";
import Input from "../../input";
import { login } from "@/app/lib/actions"
import { redirect } from "next/navigation";
import { ServerResponse } from "@/app/lib/definitions";
import Container from "../../container";
import Button from "../../button";

export default function LoginForm() {
    const [ response, formAction] = useFormState(requestLogin, null);

    async function requestLogin(state: any, formData: FormData): Promise<ServerResponse>{
        const response = await login(formData);
        
        if (response?.status == 200) {
            redirect("/");
        }

        return response;
    }

    return (
        <Container className="flex">
            <form className="space-y-6" action={formAction}>
                <div>
                    <Input name="username" placeholder="User Name" status={response != null? false : undefined}/>    
                </div>
                <div>
                    <Input type="password" name="password" placeholder="password" message={response?.message} status={response != null? false : undefined}/>
                </div>
                <Button type="submit" className="w-full">Login</Button>
                <div className="text-sm font-medium">
                    Not registered? <a href="/account/join" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
            </form>
        </Container>
    )
}
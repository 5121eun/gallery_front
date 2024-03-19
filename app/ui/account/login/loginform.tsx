"use client"

import { useForm } from 'react-hook-form'
import Input from "../../input"
import { LoginSchema, login, loginObject } from "@/app/lib/actions"
import Container from "../../container"
import Button from "../../button"
import Title from "../../title"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { LOGIN_TITLE } from '@/app/lib/constants'


export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(LoginSchema),
      });
      const [ response, setResponse ] = useState("")
      

    async function requestLogin(params: loginObject) {
        const response = await login(params);
        
        if (response?.status == 200) {
            localStorage.setItem("login", String(true))
            window.location.href = '/'
        } else {
            setResponse(response.message)
        }
    }
    return (
        <Container className="flex w-450">
            <Title>{LOGIN_TITLE}</Title>
            <form className="space-y-2 w-full" onSubmit={handleSubmit((params: any) => requestLogin(params))}>
                <Input placeholder="User Name" inputRef={register('username').ref} {...register('username')} 
                    message={errors.username?.message?.toString()}
                    status={errors.username == undefined? undefined : false}/>    
                <Input type="password" placeholder="password" inputRef={register('password').ref} {...register('password')} 
                    message={errors.password != undefined? String(errors.password.message) : response.length > 0? response : undefined}
                    status={errors.password == undefined? undefined : false} />
                <Button type="submit" className="w-full">{LOGIN_TITLE}</Button>
                <div className="text-sm font-medium">
                    Not registered? <a href="/account/join" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
            </form>
        </Container>
    )
}
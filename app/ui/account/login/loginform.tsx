"use client"

import { useForm } from 'react-hook-form'
import Input from "@/app/ui/commons/input"
import { LoginSchema, login, loginObject } from "@/app/lib/actions"
import Container from "@/app/ui/commons/container"
import Button from "@/app/ui/commons/button"
import Title from "@/app/ui/commons/title"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { LOCAL_STORAGE_LOGIN_CHECK, LOGIN_TITLE } from '@/app/lib/constants'

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(LoginSchema),
      })
      const [ response, setResponse ] = useState("")
      
    // 로그인 API 호출
    async function requestLogin(params: loginObject) {
        const response = await login(params)
        
        // 로그인 성공 시 localstorage에 true 저장 및 메인 페이지로 리다이렉트, 실패 시 서버 메세지 표시
        if (response?.status == 200) {
            localStorage.setItem(LOCAL_STORAGE_LOGIN_CHECK, String(true))
            window.location.href = '/'
        } else {
            setResponse(response.message)
        }
    }
    
    return (
        <form onSubmit={handleSubmit((params: any) => requestLogin(params))}>
            <Container className="w-450">
                <Title>{LOGIN_TITLE}</Title>
                <Input placeholder="User Name" inputRef={register('username').ref} {...register('username')} 
                    message={errors.username?.message?.toString()}
                    status={errors.username == undefined? undefined : false}/>    
                <Input type="password" placeholder="password" inputRef={register('password').ref} {...register('password')} 
                    message={errors.password != undefined? String(errors.password.message) : response.length > 0? response : undefined}
                    status={errors.password == undefined? undefined : false} />
                <Button type="submit" className="w-full">{LOGIN_TITLE}</Button>
                <div className="w-full">
                    Not registered? <a href="/account/join" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
            </Container>
        </form>
    )
}
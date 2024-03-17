"use client"

import { useRouter } from 'next/navigation';
import Button from "@/app/ui/button";
import Input from "@/app/ui/input";
import { useForm } from 'react-hook-form';
import { JoinSchema, join, joinObject } from "@/app/lib/actions";
import Container from "@/app/ui/container";
import Title from "../../title";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function JoinForm() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(JoinSchema),
      });
      const [ response, setResponse ] = useState("")

    async function requestJoin(object: joinObject) {
        const response = await join(object);
        
        if (response?.status == 201) {
            router.push("/account/login")
        } else {
            setResponse(response.message)
        }
    }

    return (
        <Container className='flex w-450'>
            <Title>Join</Title>
            <form className="w-full" onSubmit={handleSubmit((params: any) => requestJoin(params))}>
                <Input placeholder="User Name" inputRef={register('username').ref} {...register('username')} 
                    message={errors.username == undefined? "사용자 이름을 입력해 주세요.":errors.username?.message?.toString()}
                    status={errors.username == undefined? undefined : false} />
                <Input type="email" placeholder="email" inputRef={register('email').ref} {...register('email')} 
                    message={errors.email == undefined? "사용하실 이메일 주소를 입력해 주세요.":errors.email?.message?.toString()}
                    status={errors.email == undefined? undefined : false}/>
                <Input type="password" placeholder="password" inputRef={register('password').ref} {...register('password')} 
                    message={errors.password == undefined? "사용하실 패스워드를 입력해 주세요.":errors.password?.message?.toString()}
                    status={errors.password == undefined? undefined : false}/>
                <Input type="password" placeholder="password check" inputRef={register('password_check').ref} {...register('password_check')} 
                    message={errors.password_check == undefined? "패스워드를 한번 더 입력해 주세요.":errors.password_check?.message?.toString()}
                    status={errors.password_check == undefined? undefined : false}/>
                <p>{response}</p>
                <Button type="submit" className="w-full">Join</Button>
            </form>
        </Container>
    )
}
"use client"

import { useEffect, useState } from "react"
import TopLink from "./top-link"
import { logout } from "@/app/lib/actions"
import { LOCAL_STORAGE_LOGIN_CHECK } from "@/app/lib/constants"

export default function NavLinks() {
    const [ login, setLogin ] = useState(false)
    
    // 로그아웃
    async function rqeuestLogout() {
        logout()
        localStorage.removeItem(LOCAL_STORAGE_LOGIN_CHECK)
        window.location.reload()
    }

    // 로그인 여부 확인
    useEffect(() => {
        setLogin(localStorage.getItem(LOCAL_STORAGE_LOGIN_CHECK)!=null)   
    })

    return (
        <div className="flex flex-row">
            <TopLink name="Main" href="/" />
            {
                // 로그인일 시 create와 logout, 로그아웃일 시 login 보이게
                login?
                <>
                    <TopLink name="create" href="/post/create" />
                    <TopLink name="Logout" href="#" onClick={() => rqeuestLogout()} />
                </> :
                <TopLink name="Login" href="/account/login" />
            }
        </div>
    )
}
"use client"

import { useEffect, useState } from "react";
import TopLink from "./top-link";
import { logout } from "@/app/lib/actions"

export default function NavLinks() {
    const [ login, setLogin ] = useState(false)
    
    async function rqeuestLogout() {
        logout()
        localStorage.removeItem("login")
        window.location.reload()
    }

    useEffect(() => {
        setLogin(localStorage.getItem("login")!=null)   
    })

    return (
        <div className="flex flex-row">
            <TopLink name="Main" href="/" />
            {
                // if login show upload and logout, otherwise show login
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
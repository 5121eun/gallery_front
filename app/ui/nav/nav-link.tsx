"use client"

import TopLink from "./top-link";
import { logout } from "@/app/lib/actions"

export default function NavLinks() {
    async function rqeuestLogout() {
        logout()
        localStorage.removeItem("login")
    }

    return (
        <div className="flex flex-row">
            <TopLink name="Main" href="/" />
            {
                // if login show upload and logout otherwise show login
                typeof window !== 'undefined' && localStorage.getItem("login") != null?
                <>
                    <TopLink name="upload" href="/upload" />
                    <TopLink name="Logout" href="#" onClick={() => rqeuestLogout()} />
                </> :
                <TopLink name="Login" href="/account/login" />
            }
        </div>
    )
}
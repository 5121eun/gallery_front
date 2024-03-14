"use client"

import TopLink from "./top-link";
export default function NavLinks() {

    return (
        <div className="flex flex-row">
            <TopLink name="Main" href="/" />
            {
                // if login show upload and logout otherwise show login
                typeof window !== 'undefined' && localStorage.getItem("login") != null?
                <>
                    <TopLink name="upload" href="/upload" />
                    <TopLink name="Logout" href="/logout" />
                </> :
                <TopLink name="Login" href="/login" />
            }
        </div>
    )
}
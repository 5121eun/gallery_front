import LoginForm from "@/app/ui/account/login/loginform";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login'
};

export default function Page() {
    return (
        <main className="flex justify-center">
            <LoginForm />
        </main>
    )
}
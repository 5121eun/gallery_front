import JoinForm from "@/app/ui/account/join/joinform";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Join'
};

export default function Page() {
    return (
        <main className="flex justify-center">
            <JoinForm />
        </main>
    )
}
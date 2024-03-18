import { JOIN_TITLE } from "@/app/lib/constants";
import JoinForm from "@/app/ui/account/join/joinform";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: JOIN_TITLE
};

export default function Page() {
    return (
        <main className="flex justify-center">
            <JoinForm />
        </main>
    )
}
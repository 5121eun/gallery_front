import Link from "next/link"
import { SUBJECT, TITLE } from "../lib/constants"

export default function Logo() {
    return (
        <Link href="/" className="flex flex-col">
            <h2 className="flex text-3xl font-extrabold dark:text-white">{TITLE}</h2>
            <p className="flex text-lg text-gray-500">{SUBJECT}</p>
        </Link>
    )
}
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex flex-col">
            <h2 className="flex text-3xl font-extrabold dark:text-white">LOGO</h2>
            <p className="flex text-lg text-gray-500">logo logo logo logo</p>
        </Link>
    )
}
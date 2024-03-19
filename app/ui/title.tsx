import { ReactNode } from "react"

export default function Title({ children }: { children: ReactNode}) {
    return (
        <h2 className="text-4xl font-extrabold dark:text-white p-5">{children}</h2>
    )
}
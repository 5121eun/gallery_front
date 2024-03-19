import Logo from "@/app/ui/logo"
import NavLinks from "./nav-link"

export default function TopNav() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-end">
                <Logo />
                <NavLinks />
            </div>
            <hr className="h-0.5 mt-3 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
    )
}
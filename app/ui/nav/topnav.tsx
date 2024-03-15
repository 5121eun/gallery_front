import Logo from "@/app/ui/logo"
import NavLinks from "./nav-link"
import DivRow from "../div-row"

export default function TopNav() {
    return (
        <div className="flex flex-col w-full p-10">
            <div className="flex flex-row justify-between items-end">
                <Logo />
                <NavLinks />
            </div>
            <hr className="h-0.5 mt-3 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
    )
}
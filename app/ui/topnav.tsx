import Logo from "@/app/ui/logo"
import NavLinks from "./nav-link"

export default function TopNav() {
    return (
        <div className="flex flex-row justify-between items-center m-5 ">
            <Logo />
            <NavLinks />
        </div>
    )
}
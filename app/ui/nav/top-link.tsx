import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TopLinkProps extends React.HTMLAttributes<HTMLElement>{
    name: string;
    href: string;
}
export default function TopLink({ name, href, ...rest }: TopLinkProps) {
    const pathname = usePathname();
    
    return (
        <Link 
            {...rest}
            key={name}
            href={href}
            className={clsx(
                'pl-5 hover:underline underline-offset-8',
                {
                    'text-blue-400 underline underline-offset-8': pathname == href 
                }
                )}
        >
            <p>{name}</p>
        </Link>
    )
}
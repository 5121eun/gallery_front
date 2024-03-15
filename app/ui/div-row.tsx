interface DivRowProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function DivRow({ children, className }: DivRowProps) {
    return (
        <div className={`flex flex-row w-full items-center ${className}`}>{children}</div>
    )
}
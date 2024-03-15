export default function DivRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row items-center">{children}</div>
    )
}
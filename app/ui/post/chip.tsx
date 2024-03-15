import X from "@/app/ui/svg/x-icon";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string;
    icon?: boolean;
    color: string;
    handleClick_X?: (evet: React.MouseEvent<HTMLButtonElement>) => void;
    handleClick?: (evet: React.MouseEvent<HTMLButtonElement>) => void;
  }

export default function Chip({ children, icon, color, handleClick_X, handleClick }: ChipProps) {
    return (
        <span 
        onClick={handleClick}
        className={`w-fit h-fit cursor-pointer inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-${color}-800 bg-${color}-100 rounded dark:bg-${color}-900 dark:text-${color}-300`}>
            {children}
            {
                icon &&
                <button type="button" className={`items-center p-1 ms-2 text-sm text-${color}-400 bg-transparent rounded-sm hover:bg-${color}-200 hover:text-${color}-900 dark:hover:bg-${color}-800 dark:hover:text-${color}-300`} data-dismiss-target={`#badge-dismiss-${color}`} aria-label="Remove" onClick={handleClick_X}>
                    <X />
                </button>
            }
            <input type="text" className="hidden" name="tags[]" value={children} readOnly/>
        </span>
    )
}
import X from "@/app/ui/svg/x-icon";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string;
    onClick_X?: (evet: React.MouseEvent<HTMLButtonElement>) => void;
  }

export default function Chip({ children, onClick_X, onClick }: ChipProps) {
    return (
        <span 
            onClick={onClick}
            className="w-fit h-fit cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {children}
            {
                // x 버튼 클릭 이벤트 전달 시 버튼 추가
                onClick_X &&
                <>
                    <button type="button" 
                    className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" 
                    onClick={onClick_X}>
                        <X />
                    </button>
                    <input type="text" className="hidden" name="tags[]" value={children} readOnly/>
                </>
            }
        </span>
    )
}
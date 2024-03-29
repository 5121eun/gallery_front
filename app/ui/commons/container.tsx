import clsx from 'clsx'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
  }

export default function Container({ children, className, ...rest }: ContainerProps) {
    return (
        <div
            {...rest}
            className={clsx(
                'flex flex-col w-fit space-y-3 p-10 items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
                className,
            )}
        >
            {children}
        </div>
    )
}
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

export default function Container({ children, className, ...rest }: ContainerProps) {
    return (
        <div
            {...rest}
            className={clsx(
                'p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
                className
            )}
        >
            {children}
        </div>
    )
}
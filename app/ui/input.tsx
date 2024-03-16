import clsx from 'clsx';
import { RefCallback, RefObject } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    status?: boolean
    message?: string
    inputRef?: RefObject<HTMLInputElement> | RefCallback<HTMLInputElement>
}

export default function Input({ status, message, inputRef, className, ...rest}: InputProps) {
    return (
        <div className='mt-3 mb-5'>
            <input
                ref={inputRef}
                {...rest}
                className={clsx(
                    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white',
                    className,
                    {
                        'bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500': status === true,
                        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500': status === false
                    }
                )}
            />
            <p id="message" className={clsx(
                'mt-2 text-sm text-gray-500 dark:text-gray-400',
                {
                    'text-green-600 dark:text-green-500': status === true,
                    'text-red-600 dark:text-red-500': status === false
                }
            )}>{message}</p>
        </div>
    )
}
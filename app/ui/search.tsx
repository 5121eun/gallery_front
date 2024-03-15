"use client"

import { get_tags } from "@/app/lib/actions";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "./svg/search-icon";

interface SearchProps {
    onSearch: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
    const [ all_tags, setAllTags ] = useState<string[]>([])
    const [ focus, setFocus ] = useState(false)
    const [ value, setValue ] = useState("")

    const divRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        requestTags();
    }, [])

    async function requestTags() {
        let new_all_tags = await get_tags();
        setAllTags(new_all_tags)
    }

    function onFocus () {
        if (divRef?.current) {
            divRef.current.style.visibility = "visible";
            
        }
        setFocus(true)
    }

    function offFocus() {
        setTimeout(() => {
            if (divRef?.current) {
                divRef.current.style.visibility = "hidden";
                
            }
            setFocus(false)
        }, 100)
    }

    return (
            <div className="w-10/12 focus-within relative" 
            onBlur={offFocus} tabIndex={1}>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input type="search" 
                        id="default-search" 
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search Tags,.."  
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        onFocus={onFocus}
                        required />
                    <button onClick={() => onSearch(value)} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                {
                    focus && <div className="flex absolute w-full p-3 flex-col space-y-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" ref={divRef}>
                    {all_tags.map((tag) => {
                        if (value.length == 0) {
                            return <p key={tag} className="cursor-pointer" onClick={() => {
                                setValue(tag)
                                onSearch(tag)
                            }}># {tag}</p>
                        } else if(tag.includes(value)) {
                            return <p key={tag} className="cursor-pointer" onClick={() => {
                                setValue(tag)
                                onSearch(tag)
                            }}># {tag}</p>
                        }
                    })}
                </div>
                }
            </div>
    )
}

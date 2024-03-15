"use client"

import { useState, useRef, useEffect, ChangeEvent } from "react";
import Chip from "./chip";
import { get_tags } from "@/app/lib/actions";
import DivRow from "../div-row";

interface TagsProps {
    old_tags: string[],
    readonly?: boolean
}

export default function Tags({ old_tags, readonly }: TagsProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null);

    const [ value, setValue ] = useState("");
    const [ tags, setTags ] = useState<string[]>(old_tags)
    const [ all_tags, setAllTags ] = useState<string[]>([])

    useEffect(() => {
        requestTags();
    }, [])

    async function requestTags() {
        let new_all_tags = await get_tags();

        setAllTags(new_all_tags)
    }

    function chipHandleClick_X(event: React.MouseEvent<HTMLButtonElement>) {
        const { parentElement } = event.currentTarget as HTMLButtonElement;
        let new_tags = tags;
        const index = new_tags.indexOf(parentElement?.textContent as string);
        new_tags.splice(index, 1);
        setTags([
            ...new_tags
        ]);
    }

    function chipHandleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const { textContent } = event.target as HTMLButtonElement;

        if (textContent) {
            setTags([
                ...tags,
                textContent
            ])
            if (!all_tags.includes(textContent)) {
                setAllTags([
                    ...all_tags,
                    textContent,
                ])
            }
        }

        setValue("")
    }

    function onFocus () {
        if (divRef?.current) {
            divRef.current.style.opacity = "100";
        } 
    }

    function offFocus() {
        if (divRef?.current) {
            divRef.current.style.opacity = "0";
        }
    }

    return (
        <div className="w-full focus-within relative" onClick={() => {
            inputRef.current?.focus();
        }} tabIndex={1}>
            <div className="flex flex-row items-center">
                {tags.map((t) => {
                    if (readonly) {
                        return (
                            <Chip key={t}>{t}</Chip>
                        )
                    } else {
                        return (
                            <Chip key={t} handleClick_X={chipHandleClick_X} icon={true}>{t}</Chip>
                        )
                    }
                })}
                {
                    !readonly && <input type="text" className="flex-1 opacity-0 focus:opacity-100 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder="Tags" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    ref={inputRef}
                    onFocus={onFocus}
                    onBlur={offFocus}/>
                }
            </div>
            <div className="z-10 flex absolute w-full p-3 flex-col space-y-3 opacity-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" ref={divRef}>
                {
                    value.length > 0 && !all_tags.includes(value) &&
                    <DivRow>
                        태그생성:    
                        <Chip key={value} handleClick={chipHandleClick}>{value}</Chip>
                    </DivRow>
                }
                {all_tags.map((tag) => {
                    if (!tags.includes(tag)) {
                        if (value.length == 0) {
                            return <Chip key={tag} handleClick={chipHandleClick}>{tag}</Chip>
                        } else if(tag.includes(value)) {
                            return <Chip key={tag} handleClick={chipHandleClick}>{tag}</Chip>
                        }
                    }
                })}
            </div>
        </div>
    )
}
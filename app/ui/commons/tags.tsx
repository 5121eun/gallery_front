"use client"

import { useState, useRef, useEffect } from "react"
import Chip from "./chip"
import { get_tags } from "@/app/lib/actions"
import DivRow from "@/app/ui/commons/div-row"

interface TagsProps {
    old_tags: string[],
    readonly?: boolean
}

export default function Tags({ old_tags, readonly }: TagsProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [ value, setValue ] = useState("");
    const [ tags, setTags ] = useState<string[]>(old_tags)
    const [ all_tags, setAllTags ] = useState<string[]>([])

    const [ focus, setFocus ] = useState(false)

    useEffect(() => {
        requestTags()
    }, [])

    // 태그리스트 api 호출
    async function requestTags() {
        setAllTags(await get_tags())
    }

    // input 태그 focus 시 자동완성 div 보이게
    const handleOnFocus = () => setFocus(true)

    // input 태그 blur 시 자동완성 div 안 보이게
    // 바로 focus false 하면 클릭이 안돼서 100ms 후 false
    const handleOffFocus = () => setTimeout(() => { setFocus(false) }, 100)
    

    // chip의 X버튼 click 시 선택된 태그에서 제외
    function chipHandleClick_X(event: React.MouseEvent<HTMLButtonElement>) {
        const { parentElement } = event.currentTarget as HTMLButtonElement;

        let new_tags = tags;
        const index = new_tags.indexOf(parentElement?.textContent as string);
        new_tags.splice(index, 1);
        setTags([
            ...new_tags
        ])
    }

    // chip click 시
    function chipHandleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const { textContent } = event.target as HTMLButtonElement;

        if (textContent) {

            // 선택된 태그에 추가
            setTags([
                ...tags,
                textContent
            ])

            // 새로운 태그일 시 태그 리스트에 추가
            if (!all_tags.includes(textContent)) {
                setAllTags([
                    ...all_tags,
                    textContent,
                ])
            }
        }

        setValue("")
    }


    return (
        <div tabIndex={1} className="w-full relative" onClick={() => inputRef.current?.focus()}>
            <div className="flex flex-row items-center">
                {
                    // 선택된 태그 리턴
                    tags.map((t) => {
                        return (
                            <Chip key={t} onClick_X={readonly == true? undefined : chipHandleClick_X}>{t}</Chip>
                        )
                })}
                {   
                    // readonly 아닐 때만 input 보이게
                    !readonly && 
                    <input type="text" className="flex-1 opacity-0 focus:opacity-100 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder="Tags" 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        ref={inputRef}
                        onFocus={handleOnFocus}
                        onBlur={handleOffFocus}/>
                }
            </div>
           {
                // input focus 시 자동완성 div 보이게
                focus && 
                <div className="z-10 flex absolute w-full p-3 flex-col space-y-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {
                    //input에 value가 있고 기존 태그에 없으면 태그 생성 보이게
                    value.length > 0 && !all_tags.includes(value) &&
                    <DivRow>
                        태그생성:    
                        <Chip key={value} onClick={chipHandleClick}>{value}</Chip>
                    </DivRow>
                }
                {  
                    //태그 자동완성
                    all_tags.map((tag) => {

                        // 선택되지 않은 태그만 보이게
                        if (!tags.includes(tag)) {

                            // input value가 없으면 모든 태그, value가 있으면 그걸 포함하는 태그 리턴
                            if (value.length == 0) {
                                return <Chip key={tag} onClick={chipHandleClick}>{tag}</Chip>
                            } else if(tag.includes(value)) {
                                return <Chip key={tag} onClick={chipHandleClick}>{tag}</Chip>
                            }
                        }
                 })}
                </div>
            }
        </div>
    )
}
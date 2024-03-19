"use client"

import { get_tags } from "@/app/lib/actions"
import { useEffect, useState } from "react"
import SearchIcon from "./svg/search-icon"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Button from "./commons/button"
import Container from "./commons/container"

export default function Search() {
    const [ all_tags, setAllTags ] = useState<string[]>([])
    const [ focus, setFocus ] = useState(false)
    const [ value, setValue ] = useState("")

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

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

    // input의 value 검색 결과 page로 이동
    function handleSearch(value: string) {
        const params = new URLSearchParams(searchParams)
        if (value) {
          params.set('query', value)
        } else {
          params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
            <div className="w-full relative">
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
                        onFocus={handleOnFocus}
                        onBlur={handleOffFocus}
                        defaultValue={searchParams.get('query')?.toString()}
                         />
                    <Button className="absolute end-2.5 bottom-2 mb-0" onClick={() => handleSearch(value)} >Search</Button>
                </div>
                {
                    focus && 
                    <Container className="p-3 z-10 absolute w-full !items-start">
                        {all_tags.map((tag) => {
                            if (value.length == 0) {
                                return <p key={tag} className="cursor-pointer" onClick={() => {
                                    setValue(tag)
                                    handleSearch(tag)
                                }}># {tag}</p>
                            } else if(tag.includes(value)) {
                                return <p key={tag} className="cursor-pointer" onClick={() => {
                                    setValue(tag)
                                    handleSearch(tag)
                                }}># {tag}</p>
                            }
                        })}
                    </Container>
                }
            </div>
    )
}

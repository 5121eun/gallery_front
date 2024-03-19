"use client"

import { useRef, useState } from "react"
import Image from 'next/image'

export default function DropZone(){
    const [ image, setImage ] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // 이미지 드래그 앤 드롭 시 새 탭에서 보여주기 방지
    const handleDragOver = (event: React.DragEvent) => event.preventDefault()

    // 파일 드롭 시
    function handleDrop(event: React.DragEvent) {

        // 새 탭에서 보여주기 방지 및 드롭한 파일 변수에 저장
        event.preventDefault();
        const files = event.dataTransfer.files

        // 드롭한 이미지 input 태그에 전달
        if (inputRef?.current) {
            inputRef.current.files = files
        }

        // 첨부한 이미지 보여주기
        const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onloadend = () => {
                setImage(reader.result as string);
           }
    }

    // input 값 변경 시 새로운 이미지 보여주기
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        
        if (event.currentTarget.files) {
            const file = event.currentTarget.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setImage(reader.result as string)
           }
        }
    }

    return (
        <div className="w-720 h-520 items-center justify-center">
            <label htmlFor="dropzone-file" className="flex flex-col w-full h-full"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}>
                {image == null?
                    <div className="m-auto flex flex-col w-full h-full items-center justify-center pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>:
                    <Image 
                        src={image}
                        width={720}
                        height={480}
                        alt="image"
                    />
                }
            <input id="dropzone-file" type="file" name="image" className="hidden" ref={inputRef} onChange={handleChange}/>
            </label>
        </div> 
    )
}
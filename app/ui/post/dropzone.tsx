"use client"

import { useRef, useState } from "react";
import Image from 'next/image'

export default function DropZone(){
    const [ image, setImage ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleDrop(event: React.DragEvent) {
        event.preventDefault();
        const files = event.dataTransfer.files;

        if (inputRef?.current) {
            inputRef.current.files = files;            
        }

        const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setImage(reader.result as string);
           };
    }

    function handleDragOver(event: React.DragEvent) {
        event.preventDefault();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        
        if (event.currentTarget.files) {
            const file = event.currentTarget.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result as string);
           };
        }
    }

    return (
        <div className="w-720 h-520 items-center justify-center ">
            {
                image == null ?
                <label htmlFor="dropzone-file" className="m-auto flex flex-col w-full h-full items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" name="image" className="hidden" ref={inputRef} onChange={handleChange}/>
                </label> :
                <label htmlFor="dropzone-file" className=""
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragOver}>
                        <Image 
                            src={image}
                            width={720}
                            height={480}
                            alt="image"
                        />
                        <input id="dropzone-file" type="file" name="image" className="hidden" ref={inputRef} onChange={handleChange}/>
                </label>
            }
        </div> 
    )
}

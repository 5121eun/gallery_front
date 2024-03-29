"use client"

export default function Back() {
    return (
        <svg onClick={() => { history.back() }} className="w-3.5 h-3.5 mr-2 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
        </svg>
    )
}
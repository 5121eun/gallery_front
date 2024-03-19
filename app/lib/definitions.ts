export type Post = {
    id: number
    author: number
    date: string
    image: string
    tags: string[]
}

export type ServerResponse = {
    message: string
    status: number | undefined
}
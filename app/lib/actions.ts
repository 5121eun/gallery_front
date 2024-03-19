import axios, { AxiosError } from 'axios'
import { Post, ServerResponse } from './definitions'

import { z } from 'zod'
import qs from 'qs'
import { API_SERVER, 
    GET, 
    JOIN_API_PATH, 
    LOGIN_API_PATH, 
    LOGOUT_API_PATH,
    POST, 
    POST_API_PATH, 
    POST_DETAIL_API_PATH, 
    TAG_API_PATH } from './constants'

const client = axios.create({
    baseURL:API_SERVER,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withXSRFToken: true,
    withCredentials: true,
})

export const UserSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3)
})

export const LoginSchema = UserSchema.omit({ email: true })
export type loginObject = z.infer<typeof LoginSchema>

export const JoinSchema = UserSchema.extend({
    password_check: z.string().min(3)
}).refine((value) => {
    return value.password === value.password_check
}, {
    message: "password does not match",
    path: [
        "password_check"
    ]
})
export type joinObject = z.infer<typeof JoinSchema>

export async function join(object: joinObject): Promise<ServerResponse> {
    
    try {
        const response = await client({
            method: POST,
            url: JOIN_API_PATH,
            data: {
                username: object.username,
                email: object.email,
                password: object.password
            }
        })

        return {
            message: "회원가입 성공",
            status: response.status
        }

    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return {
                message: error.response?.data.username[0],
                status: error.response?.status
            }
        } else {
            return {
                message: "Unknown Error",
                status: 400
            }
        }

    }
}

export async function login(object: loginObject): Promise<ServerResponse>{
    try {
        const response = await client({
            method: POST,
            url: LOGIN_API_PATH,
            data: object
        })

        return {
            message: "",
            status: 200
        }
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return {
                message: error.response?.data.message,
                status: error.response?.status
            }
        } else {
            return {
                message: "Unknown Error",
                status: 400
            }
        }
    }
}

export async function logout(): Promise<ServerResponse>{

    try {
        const response = await client({
            method: GET,
            url: LOGOUT_API_PATH,
        });

        localStorage.removeItem("login")

        return {
            message: response.data,
            status: 200
        }
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return {
                message: error.response?.data.message,
                status: error.response?.status
            }
        } else {
            return {
                message: "Unknown Error",
                status: 400
            }
        }
    }
}

export async function getPosts(page: number, tags: string | undefined): Promise<Post[]> {
    try {
        const response = await client({
            method: GET,
            url: POST_API_PATH, 
            params: {
                page: page,
                tags: tags
            },
            paramsSerializer: (param) => {
                return qs.stringify(param, { arrayFormat: 'repeat' })
            }
        })

        return response.data.results;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return []
        } else {
            return []
        }
    }
}

export async function get_post(id: number): Promise<Post|null> {
    try {
        const response = await client({
            method: GET,
            url: POST_DETAIL_API_PATH(id), 
        })

        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return null
        } else {
            return null
        }
    }
}

export async function create_post(formData: FormData): Promise<ServerResponse> {
    
    try {
        const response = await client({
            method: POST,
            url: POST_API_PATH,
            data: formData
        })

        return {
            message: response.data.id,
            status: response.status
        }

    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return {
                message: error.response?.data,
                status: error.response?.status
            }
        } else {
            return {
                message: "Unknown Error",
                status: 400
            }
        }

    }
}

export async function get_tags(): Promise<string[]> {
    try {
        const response = await client({
            method: GET,
            url: TAG_API_PATH, 
        });

        return response.data.tags
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return []
        } else {
            return []
        }
    }
}

import axios, { AxiosError } from 'axios';
import { Post, ServerResponse } from './definitions';

import { z } from 'zod';
import qs from 'qs';

const client = axios.create({
    baseURL:'http://127.0.0.1:8000',
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withXSRFToken: true,
    withCredentials: true,
})

const UserSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3)
});

const LoginSchema = UserSchema.omit({ email: true });

const JoinSchema = UserSchema.extend({
    password_check: z.string().min(3)
}).refine((value) => {
    return value.password == value.password_check
}, {
    message: "password not same",
    path: [
        "password_check"
    ]
})

export async function join(formData: FormData): Promise<ServerResponse> {
    
    try {
        const { username, email, password, password_check } = JoinSchema.parse({
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_check: formData.get('password_check')
        });

        const response = await client({
            method: 'post',
            url: '/account/users/',
            data: {
                username: username,
                email: email,
                password: password
            }
        });

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

export async function login(formData: FormData): Promise<ServerResponse>{
    const { username, password } = LoginSchema.parse({
        username: formData.get('username'),
        password: formData.get('password')
    });

    try {
        const response = await client({
            method: 'post',
            url: '/account/login',
            data: {
                username: username,
                password: password
            }
        });

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
            method: 'get',
            url: '/account/logout',
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
            method: 'get',
            url: '/post/', 
            params: {
                page: page,
                tags: tags
            },
            paramsSerializer: (param) => {
                return qs.stringify(param, { arrayFormat: 'repeat' })
            }
        });
        
        return response.data.results;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return [];
        } else {
            return [];
        }
    }
}

export async function get_post(id: number): Promise<Post|null> {
    try {
        const response = await client({
            method: 'get',
            url: `/post/${id}/`, 
        });

        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return null;
        } else {
            return null;
        }
    }
}

export async function create_post(state: any, formData: FormData): Promise<ServerResponse> {
    
    try {
        const response = await client({
            method: 'post',
            url: '/post/',
            data: formData
        });

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
            method: 'get',
            url: `/post/get_all_tags/`, 
        });

        return response.data.tags;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return [];
        } else {
            return [];
        }
    }
}

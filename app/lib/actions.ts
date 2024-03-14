import axios, { AxiosError } from 'axios';
import { Post } from './definitions';

import qs from 'qs';

const client = axios.create({
    baseURL:'http://127.0.0.1:8000',
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withXSRFToken: true,
    withCredentials: true,
})

export async function getPosts(page: number, tags: string[]): Promise<Post[]> {
    try {
        const response = await client({
            method: 'get',
            url: '/post/posts/', 
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

export async function get_tags(): Promise<string[]> {
    try {
        const response = await client({
            method: 'get',
            url: `/post/posts/get_all_tags/`, 
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


/////////////////////// API ///////////////////////
export const API_SERVER = "http://127.0.0.1:8000"
export const LOGIN_API_PATH = "/account/login"
export const JOIN_API_PATH = "/account/users/"
export const LOGOUT_API_PATH = "/account/logout"
export const POST_API_PATH = "/post/"
export const POST_DETAIL_API_PATH = (id: number) => `/post/${id}/`
export const TAG_API_PATH = "/post/get_all_tags/"

export const GET = "get"
export const POST = "post"

/////////////////////// UI ///////////////////////
export const TITLE = "Gallery"
export const SUBJECT = "Share your photos"

export const JOIN_TITLE = "Join"
export const LOGIN_TITLE = "Login"
export const POST_DETAIL_TITLE = "Post Detail"
export const POST_CREATE_TITLE = "Post Create"

/////////////////////// OTHER ///////////////////////
export const LOCAL_STORAGE_LOGIN_CHECK = "login"
export const LOGIN = "/auth/login"

const apiRoot = "https://api.unsplash.com"
const accessKey = process.env.REACT_APP_ACCESSKEY

export const CONFIG = {
    method: "GET",
    url: `${apiRoot}/photos/random`,
    params: {
        count: 8
    },
    headers: {
        Authorization: `Client-ID ${accessKey}`
    },
}
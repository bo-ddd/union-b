const isProduction = process.env.NODE_ENV === 'production'
let serveUrl = isProduction ? 'http:127.0.0.1:7001' :  '/api';


export const postConfig = {
    url: "",
    baseURL: serveUrl,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    timeout: 5000
}
export const uploadConfig = {
    url: "",
    baseURL: serveUrl,
    headers: {
        "Content-Type": "multipart/form-data",
        "X-Requested-With": "XMLHttpRequest",
    },
    timeout: 5000
}

export const getConfig = {
    url: "",
    baseURL: serveUrl,
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    timeout: 5000
};
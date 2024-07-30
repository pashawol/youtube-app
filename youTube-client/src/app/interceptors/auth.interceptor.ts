import { HttpInterceptorFn } from "@angular/common/http"

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const apiUrl = "https://www.googleapis.com/youtube/v3"
    const apiKey = "AIzaSyDPxfj2MXhocmzc2cwUcvvPhk6Mh10LkvE"

    const modifiedUrl = `${apiUrl}${req.url}`

    // Clone the request to add the new URL and the access token
    const youtubeRequest = req.clone({
        url: modifiedUrl,
        setParams: {
            key: apiKey
        }
    })

    return next(youtubeRequest)
}

import { HttpInterceptorFn } from "@angular/common/http"
import { environment } from "@environments/environment.development"

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const { apiUrl, apiKey } = environment

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

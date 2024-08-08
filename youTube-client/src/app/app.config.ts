import { provideHttpClient, withInterceptors } from "@angular/common/http"
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { provideRouter } from "@angular/router"
import { provideStore } from "@ngrx/store"

import { routes } from "./app.routes"
import { authInterceptor } from "./interceptors/auth.interceptor"
import { videoReducer } from "./store/reducers/video.reducer"

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        // provideClientHydration(),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideStore(videoReducer)
    ]
}

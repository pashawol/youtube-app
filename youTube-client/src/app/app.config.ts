import { provideHttpClient, withInterceptors } from "@angular/common/http"
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from "@angular/core"
import { provideRouter } from "@angular/router"
import { provideEffects } from "@ngrx/effects"
import { provideStore } from "@ngrx/store"
import { provideStoreDevtools } from "@ngrx/store-devtools"

import { routes } from "./app.routes"
import { authInterceptor } from "./interceptors/auth.interceptor"
import { VideoEffects } from "./store/effects/video.effects"
import { videoReducer } from "./store/reducers"
import { videosFeatureKey } from "./store/store.constants"

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        // provideClientHydration(),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideStore({ [videosFeatureKey]: videoReducer }),
        provideEffects(VideoEffects),
        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false,
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
            connectInZone: true // If set to true, the connection is established within the Angular zone
        })
    ]
}

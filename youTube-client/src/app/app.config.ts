import { provideHttpClient, withInterceptors } from "@angular/common/http"
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { provideRouter } from "@angular/router"
import { provideEffects } from "@ngrx/effects"
import { provideStore } from "@ngrx/store"

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
        provideEffects(VideoEffects)
    ]
}

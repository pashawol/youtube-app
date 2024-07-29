import { provideHttpClient } from "@angular/common/http"
import { ApplicationConfig } from "@angular/core"

// import { routes } from "./app.routes"

export const appConfig: ApplicationConfig = {
    providers: [
        // provideZoneChangeDetection({ eventCoalescing: true }),
        // provideRouter(routes),
        // provideClientHydration(),
        provideHttpClient()
    ]
}

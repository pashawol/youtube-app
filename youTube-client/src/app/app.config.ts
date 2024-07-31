import { provideHttpClient, withInterceptors } from "@angular/common/http"
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { provideRouter } from "@angular/router"

import { routes } from "./app.routes"
import { authInterceptor } from "./interceptors/auth.interceptor"

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        ReactiveFormsModule,
        // provideClientHydration(),
        provideHttpClient(withInterceptors([authInterceptor]))
    ]
}

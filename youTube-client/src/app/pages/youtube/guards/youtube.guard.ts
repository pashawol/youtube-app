import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { LoginService } from "@app/pages/login/services/login.service"

export const youtubeGuard: CanActivateFn = () => {
    const loginService = inject(LoginService)
    const router = inject(Router)

    if (!loginService.isLoggedIn()) {
        router.navigate(["login"])
    }

    return loginService.isLoggedIn()
}

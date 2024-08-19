import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router"
import { LoginService } from "@app/pages/login/services/login.service"

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const loginService = inject(LoginService)
    const router = inject(Router)

    const isLoggedIn = loginService.loginStatus$()

    if (state.url !== "/login") {
        if (isLoggedIn) return true
        return router.parseUrl("login")
    }
    if (isLoggedIn) return router.parseUrl("youtube")
    return true
}

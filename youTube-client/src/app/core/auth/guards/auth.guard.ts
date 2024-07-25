import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router"
import { LoginService } from "@app/pages/login/services/login.service"
import { map } from "rxjs"

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const loginService = inject(LoginService)
    const router = inject(Router)

    return loginService.loginStatus$.pipe(
        map((isLoggedIn: boolean) => {
            if (state.url === "/login" && isLoggedIn) {
                return router.parseUrl("youtube")
            }
            if (isLoggedIn) {
                return true
            }

            return router.parseUrl("login")
        })
    )
}

import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { LoginService } from "@app/pages/login/services/login.service"
import { map } from "rxjs"

export const authGuard: CanActivateFn = () => {
    const loginService = inject(LoginService)
    const router = inject(Router)

    return loginService.loginStatus$.pipe(
        map((isLoggedIn: boolean) => {
            if (isLoggedIn) {
                return true
            }

            return router.parseUrl("login")
        })
    )
}

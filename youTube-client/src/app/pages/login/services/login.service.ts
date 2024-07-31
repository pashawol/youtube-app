import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Login } from "@app/shared/models/login.model"
import { BehaviorSubject, Observable } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class LoginService {
    private loginStatusSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    readonly loginStatus$: Observable<boolean> = this.loginStatusSubject$.asObservable()

    constructor(private router: Router) {
        this.init()
    }

    private init() {
        const authToken = localStorage.getItem("authToken")
        this.loginStatusSubject$.next(!!authToken)
    }

    login(login: Login): void {
        localStorage.setItem("authToken", login.username + login.password)
        this.loginStatusSubject$.next(true)
        this.router.navigate(["youtube"])
    }

    logout(): void {
        localStorage.removeItem("authToken")
        this.loginStatusSubject$.next(false)
        this.router.navigate(["/login"]) // Redirect to Login page after logout
    }
}

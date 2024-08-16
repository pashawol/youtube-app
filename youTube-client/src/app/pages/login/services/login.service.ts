import { Injectable, signal } from "@angular/core"
import { Router } from "@angular/router"
import { Login } from "@app/shared/models/login.model"

@Injectable({
    providedIn: "root"
})
export class LoginService {
    // private loginStatusSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    // readonly loginStatus$: Observable<boolean> = this.loginStatusSubject$.asObservable()

    loginStatus$ = signal<boolean>(false)

    constructor(private router: Router) {
        this.init()
    }

    private init() {
        const authToken = localStorage.getItem("authToken")
        this.loginStatus$.set(!!authToken)
    }

    login(login: Login): void {
        localStorage.setItem("authToken", login.username + login.password)
        this.loginStatus$.set(true)
        this.router.navigate(["youtube"])
    }

    logout(): void {
        this.loginStatus$.set(false)
        localStorage.removeItem("authToken")
        this.router.navigate(["/login"]) // Redirect to Login page after logout
    }
}

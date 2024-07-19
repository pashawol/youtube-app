import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({
    providedIn: "root"
})
export class LoginService {
    loginStatus: boolean = false
    constructor(private router: Router) {}

    login(username: string, password: string): void {
        // Simulate user authentication

        localStorage.setItem("authToken", username + password) // Set token in local storage
        this.router.navigate(["/"]) // Redirect to Main page after login
    }

    logout(): void {
        localStorage.removeItem("authToken")
        this.router.navigate(["/login"]) // Redirect to Login page after logout
    }

    isLoggedIn(): boolean {
        this.loginStatus = !!localStorage.getItem("authToken")
        return this.loginStatus
    }
}

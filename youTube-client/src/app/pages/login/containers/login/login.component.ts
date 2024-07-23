import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { LoginService } from "@app/pages/login/services/login.service"
import { ButtonComponent } from "@app/shared/components"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"

@Component({
    selector: "app-login",
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonComponent],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss"
})
export class LoginComponent {
    username: string = ""
    password: string = ""

    constructor(private loginService: LoginService) {}

    onSubmit() {
        const isValidForm = this.isFormValid()
        if (isValidForm) {
            this.loginService.login(this.username, this.password)
        }
    }

    private isFormValid(): boolean {
        return !!this.username && !!this.password
    }
}

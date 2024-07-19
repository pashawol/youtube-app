import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { ButtonComponent } from "@app/shared/components"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"
import { LoginService } from "@app/pages/login/services/login.service"

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
        this.loginService.login(this.username, this.password)
    }
}

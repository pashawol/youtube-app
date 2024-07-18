import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
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
    login: string = "1"
    onSubmit() {
        console.log(this.login)
    }
}

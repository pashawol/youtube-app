import { Component } from "@angular/core"
import { RouterLink, RouterOutlet } from "@angular/router"
import { ButtonComponent } from "@shared/components"

@Component({
    selector: "app-login-information-block",
    standalone: true,
    imports: [ButtonComponent, RouterLink, RouterOutlet],
    templateUrl: "./login-information-block.component.html",
    styleUrl: "./login-information-block.component.scss"
})
export class LoginInformationBlockComponent {}

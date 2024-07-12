import { Component } from "@angular/core"
import { ButtonComponent } from "@shared/components/button/button.component"

@Component({
    selector: "app-login-information-block",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./login-information-block.component.html",
    styleUrl: "./login-information-block.component.scss"
})
export class LoginInformationBlockComponent {}

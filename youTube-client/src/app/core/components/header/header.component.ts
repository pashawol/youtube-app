import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { LoginService } from "@app/pages/login/services/login.service"
import { ButtonComponent } from "@app/shared/components"

import { LoginInformationBlockComponent, LogoComponent, SearchBlockComponent, SettingsButtonComponent } from ".."

@Component({
    selector: "app-header",
    standalone: true,
    imports: [
        SearchBlockComponent,
        LogoComponent,
        LoginInformationBlockComponent,
        SettingsButtonComponent,
        ButtonComponent,
        CommonModule
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {
    constructor(private loginService: LoginService) {}

    logout() {
        this.loginService.logout()
    }

    isLoggedIn(): boolean {
        return this.loginService.isLoggedIn()
    }
}

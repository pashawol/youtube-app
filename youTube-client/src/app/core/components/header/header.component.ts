import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { RouterLink, RouterOutlet } from "@angular/router"
import { LoginService } from "@app/pages/login/services/login.service"
import { ButtonComponent } from "@app/shared/components"
import { Observable } from "rxjs"

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
        CommonModule,
        RouterLink,
        RouterOutlet
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {
    readonly isLoggedIn$: Observable<boolean> = this.loginService.loginStatus$

    constructor(private loginService: LoginService) {}

    logout() {
        this.loginService.logout()
    }
}

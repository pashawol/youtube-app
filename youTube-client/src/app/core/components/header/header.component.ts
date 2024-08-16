import { CommonModule } from "@angular/common"
import { Component, effect } from "@angular/core"
import { RouterLink, RouterOutlet } from "@angular/router"
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
        CommonModule,
        RouterLink,
        RouterOutlet
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {
    // readonly isLoggedIn$: Observable<boolean> = this.loginService.loginStatus$
    isLoggedIn$ = false

    constructor(private loginService: LoginService) {
        effect(() => {
            this.isLoggedIn$ = this.loginService.loginStatus$()
        })
    }

    logout() {
        this.loginService.logout()
    }
}

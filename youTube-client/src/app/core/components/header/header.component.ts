import { Component } from "@angular/core"

import { LoginInformationBlockComponent, LogoComponent, SearchBlockComponent, SettingsButtonComponent } from ".."

@Component({
    selector: "app-header",
    standalone: true,
    imports: [SearchBlockComponent, LogoComponent, LoginInformationBlockComponent, SettingsButtonComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {}

import { Component } from "@angular/core"
import { SearchBlockComponent } from "./search-block/search-block.component"
import { LogoComponent } from "./logo/logo.component"
import { LoginInformationBlockComponent } from "./login-information-block/login-information-block.component"
import { SettingsButtonComponent } from "./settings-button/settings-button.component"
import { FilterBlockComponent } from "../filter-block/filter-block.component"
@Component({
    selector: "app-header",
    standalone: true,
    imports: [
        SearchBlockComponent,
        LogoComponent,
        LoginInformationBlockComponent,
        SettingsButtonComponent,
        FilterBlockComponent
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {}

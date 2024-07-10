import { Component } from "@angular/core"
import { ButtonComponent } from "../../shared/button/button.component"
@Component({
    selector: "app-settings-button",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./settings-button.component.html",
    styleUrl: "./settings-button.component.scss"
})
export class SettingsButtonComponent {}

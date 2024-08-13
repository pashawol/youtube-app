import { Component } from "@angular/core"
import { ButtonComponent } from "@shared/components"

@Component({
    selector: "app-navigation",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./navigation.component.html",
    styleUrl: "./navigation.component.scss"
})
export class NavigationComponent {}

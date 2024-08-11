import { Component } from "@angular/core"
import { RouterLink, RouterOutlet } from "@angular/router"

@Component({
    selector: "app-logo",
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: "./logo.component.html",
    styleUrl: "./logo.component.scss"
})
export class LogoComponent {}

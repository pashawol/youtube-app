import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

import { HeaderComponent } from "./components/header/header.component"
import { SearchResultComponent } from "./pages/search-result/search-result.component"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, SearchResultComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
    title = "youTube-client"
}

import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "@core/components/header/header.component"
import { SearchResultContainerComponent } from "@pages/search/containers/search-result-container/search-result-container.component"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, SearchResultContainerComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
    title = "youTube-client"
}

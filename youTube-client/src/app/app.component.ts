import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { SearchResultContainerComponent } from "@app/pages/youtube/pages/search/containers"
import { CoreModule } from "@core/core.module"
import { YoutubeModule } from "@pages/youtube/youtube.module"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, SearchResultContainerComponent, CoreModule, YoutubeModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
    title = "youTube-client"
}

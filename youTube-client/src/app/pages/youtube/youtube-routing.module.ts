import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

// eslint-disable-next-line max-len
import { SearchResultContainerComponent } from "./search/containers"
import { VideoDetailsComponent } from "./video-details/containers/video-details/video-details.component"

const routes: Routes = [
    { path: "", component: SearchResultContainerComponent },
    { path: "video/:id", component: VideoDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YoutubeRoutingModule {}

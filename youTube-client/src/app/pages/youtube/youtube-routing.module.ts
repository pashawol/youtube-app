import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

// eslint-disable-next-line max-len
import { SearchResultContainerComponent } from "./pages/search/containers"
// import { VideoDetailsComponenxt } from "./pages/video-details/containers/video-details/video-details.component"

const routes: Routes = [
    { path: "", component: SearchResultContainerComponent }
    // { path: ":id", component: VideoDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YoutubeRoutingModule {}

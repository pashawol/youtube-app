import { Routes } from "@angular/router"
import { ErrorModule } from "@pages/error/error.module"
import { LoginModule } from "@pages/login/login.module"
import { YoutubeModule } from "@pages/youtube/youtube.module"

export const routes: Routes = [
    { path: "", loadChildren: () => YoutubeModule },
    {
        path: "login",
        loadChildren: () => LoginModule
    },
    {
        path: "**",
        loadChildren: () => ErrorModule
    }
]

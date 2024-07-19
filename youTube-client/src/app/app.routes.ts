import { Routes } from "@angular/router"
import { ErrorModule } from "@pages/error/error.module"
import { LoginModule } from "@pages/login/login.module"
import { YoutubeModule } from "@pages/youtube/youtube.module"

import { authGuard } from "./pages/youtube/guards/auth.guard"
import { youtubeGuard } from "./pages/youtube/guards/youtube.guard"

export const routes: Routes = [
    {
        path: "youtube",
        loadChildren: () => YoutubeModule,
        canActivate: [youtubeGuard]
    },
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "login",
        loadChildren: () => LoginModule,
        canActivate: [authGuard]
    },
    {
        path: "error",
        loadChildren: () => ErrorModule
    },

    {
        path: "**",
        redirectTo: "error"
    }
]

import { Routes } from "@angular/router"
import { authGuard } from "@core/auth/guards/auth.guard"
import { ErrorModule } from "@pages/error/error.module"
import { LoginModule } from "@pages/login/login.module"
import { YoutubeModule } from "@pages/youtube/youtube.module"

// import { youtubeGuard } from "./pages/youtube/guards/youtube.guard"

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "youtube",
        loadChildren: () => YoutubeModule,
        canActivate: [authGuard]
    },
    {
        path: "login",
        loadChildren: () => LoginModule,
        canDeactivate: [authGuard]
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

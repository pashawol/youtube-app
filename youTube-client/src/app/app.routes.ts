import { Routes } from "@angular/router"
import { ErrorModule } from "@pages/error/error.module"
import { LoginModule } from "@pages/login/login.module"
import { error } from "console"
// import { YoutubeModule } from "@pages/youtube/youtube.module"

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "login",
        loadChildren: () => LoginModule
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

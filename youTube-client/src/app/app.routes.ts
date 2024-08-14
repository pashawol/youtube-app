import { Routes } from "@angular/router"
import { authGuard } from "@core/auth/guards/auth.guard"
import { ErrorModule } from "@pages/error/error.module"
import { LoginModule } from "@pages/login/login.module"
import { YoutubeModule } from "@pages/youtube/youtube.module"

export const routes: Routes = [
    { path: "", redirectTo: "youtube", pathMatch: "full" },
    {
        path: "youtube",
        loadChildren: () => YoutubeModule,
        canActivate: [authGuard]
    },
    {
        path: "admin",
        loadChildren: () => import("@pages/admin/admin.module").then((m) => m.AdminModule),
        canActivate: [authGuard]
    },
    {
        path: "login",
        loadChildren: () => LoginModule,
        canActivate: [authGuard]
    },
    {
        path: "favorites",
        loadChildren: () => import("@pages/favorites/favorites.module").then((m) => m.FavoritesModule),
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

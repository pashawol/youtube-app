import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { FavoritesContainerComponent } from "./containers/favorites-container/favorites-container.component"

const routes: Routes = [
    {
        path: "",
        component: FavoritesContainerComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FavoritesRoutingModule {}

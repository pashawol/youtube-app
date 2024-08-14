import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { Item } from "@app/shared/models/response.model"
import { loadVideos } from "@app/store/actions/video.actions"
import { selectVideos } from "@app/store/selectors/video.selectors"
import { SearchResultsListComponent } from "@core/components"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"

@Component({
    selector: "app-favorites-container",
    standalone: true,
    imports: [SearchResultsListComponent, CommonModule],
    templateUrl: "./favorites-container.component.html",
    styleUrl: "./favorites-container.component.scss"
})
export class FavoritesContainerComponent implements OnInit {
    videos$: Observable<Item[]> = this.store.select(selectVideos)

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadVideos())
    }
}

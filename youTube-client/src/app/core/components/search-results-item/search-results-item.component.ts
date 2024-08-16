import { CommonModule } from "@angular/common"
import { Component, Input, input } from "@angular/core"
import { shared } from "@app/shared/constants/shared.constants"
import { deleteVideo } from "@app/store/actions/video.actions"
import { Store } from "@ngrx/store"
import { HighlightDirective } from "@pages/youtube/directives/highlight.directive"
import { ButtonComponent, FavoriteButtonComponent, LinkComponent, RemoveButtonComponent } from "@shared/components"
import { Item } from "@shared/models/response.model"
import { CardModule } from "primeng/card"

@Component({
    selector: "app-search-results-item",
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        LinkComponent,
        HighlightDirective,
        ButtonComponent,
        RemoveButtonComponent,
        FavoriteButtonComponent
    ],
    templateUrl: "./search-results-item.component.html",
    styleUrl: "./search-results-item.component.scss"
})
export class SearchResultsItemComponent {
    PREFIX = shared.PREFIX
    data = input<Item>()

    constructor(private store: Store) {}

    removeCard(id: string): void {
        this.store.dispatch(deleteVideo({ id }))
    }

    hasPrefix(): boolean {
        return this.data().id.includes(this.PREFIX)
    }
}

import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { shared } from "@app/shared/constants/shared.constants"
import { deleteVideo } from "@app/store/actions/video.actions"
import { Store } from "@ngrx/store"
import { ButtonComponent, LinkComponent } from "@shared/components"
import { Item } from "@shared/models/response.model"
import { CardModule } from "primeng/card"

import { HighlightDirective } from "../../../../directives/highlight.directive"

@Component({
    selector: "app-search-results-item",
    standalone: true,
    imports: [CommonModule, CardModule, LinkComponent, HighlightDirective, ButtonComponent],
    templateUrl: "./search-results-item.component.html",
    styleUrl: "./search-results-item.component.scss"
})
export class SearchResultsItemComponent {
    PREFIX = shared.PREFIX
    @Input() data: Item

    constructor(private store: Store) {}

    removeCard(id: string): void {
        this.store.dispatch(deleteVideo({ id }))
    }

    hasPrefix(): boolean {
        return this.data.id.includes(this.PREFIX)
    }
}

import { Component, Input } from "@angular/core"
import { LinkComponent } from "@shared/components"
import { Item } from "@shared/models/response.model"
import { CardModule } from "primeng/card"

import { HighlightDirective } from "../../../../directives/highlight.directive"

@Component({
    selector: "app-search-results-item",
    standalone: true,
    imports: [CardModule, LinkComponent, HighlightDirective],
    templateUrl: "./search-results-item.component.html",
    styleUrl: "./search-results-item.component.scss"
})
export class SearchResultsItemComponent {
    @Input() data!: Item
}

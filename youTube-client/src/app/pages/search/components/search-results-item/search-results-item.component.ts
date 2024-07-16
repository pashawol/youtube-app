import { Component, Input } from "@angular/core"
import { ButtonComponent } from "@shared/components"
import { CardModule } from "primeng/card"

import { HighlightDirective } from "../../directives/highlight.directive"
import { Item } from "../../models/response.model"

@Component({
    selector: "app-search-results-item",
    standalone: true,
    imports: [CardModule, ButtonComponent, HighlightDirective],
    templateUrl: "./search-results-item.component.html",
    styleUrl: "./search-results-item.component.scss"
})
export class SearchResultsItemComponent {
    @Input() data!: Item
}

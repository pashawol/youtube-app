import { Component, Input } from "@angular/core"
import { ButtonModule } from "primeng/button"
import { CardModule } from "primeng/card"

import { HighlightDirective } from "../../../directives/highlight.directive"
import { Item } from "../../../models/types.model"
import { ButtonComponent } from "../../shared/button/button.component"

@Component({
    selector: "app-search-results-item",
    standalone: true,
    imports: [CardModule, ButtonModule, ButtonComponent, HighlightDirective],
    templateUrl: "./search-results-item.component.html",
    styleUrl: "./search-results-item.component.scss"
})
export class SearchResultsItemComponent {
    @Input() data!: Item
}

import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { NavigationComponent } from "@shared/components"
import { Item } from "@shared/models/response.model"

import { SearchResultsItemComponent } from "../search-results-item/search-results-item.component"

@Component({
    selector: "app-search-results-list",
    standalone: true,
    imports: [SearchResultsItemComponent, NavigationComponent, CommonModule],
    templateUrl: "./search-results-list.component.html",
    styleUrl: "./search-results-list.component.scss"
})
export class SearchResultsListComponent {
    @Input() items!: Item[]
    @Input() showNavigation!: boolean
    @Input() token: { prev: string | null; next: string | null } = { prev: null, next: null }
}

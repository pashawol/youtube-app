import { CommonModule } from "@angular/common"
import { Component, input } from "@angular/core"
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
    items = input<Item[]>([])
    showNavigation = input<boolean>(false)
    token = input<{ prev: string | null; next: string | null }>()
}

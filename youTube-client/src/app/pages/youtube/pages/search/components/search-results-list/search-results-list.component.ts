import { Component, Input } from "@angular/core"
import { Item } from "@shared/models/response.model"
import { NavigationComponent } from "@shared/components"
import { SearchResultsItemComponent } from "../search-results-item/search-results-item.component"

@Component({
    selector: "app-search-results-list",
    standalone: true,
    imports: [SearchResultsItemComponent, NavigationComponent],
    templateUrl: "./search-results-list.component.html",
    styleUrl: "./search-results-list.component.scss"
})
export class SearchResultsListComponent {
    @Input() items!: Item[]
}

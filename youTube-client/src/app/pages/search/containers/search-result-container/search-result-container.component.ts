import { CommonModule } from "@angular/common" //
import { Component } from "@angular/core"
import { FilterBlockComponent } from "@core/components/filter-block/filter-block.component"

import { SearchResultsListComponent } from "../../components/search-results-list/search-results-list.component"
import { SearchService } from "../../services/search.service"

@Component({
    selector: "app-search-result-container",
    standalone: true,
    imports: [CommonModule, SearchResultsListComponent, FilterBlockComponent],
    templateUrl: "./search-result-container.component.html",
    styleUrl: "./search-result-container.component.scss"
})
export class SearchResultContainerComponent {
    searchActivated$ = this.searchService.searchActivated$

    constructor(private searchService: SearchService) {}
}

import { CommonModule } from "@angular/common" //
import { Component, OnDestroy } from "@angular/core"
import { FilterBlockComponent } from "@core/components/filter-block/filter-block.component"
import { Subscription } from "rxjs"

import { SearchResultsListComponent } from "../../components/search-results-list/search-results-list.component"
import { SearchService } from "../../services/search.service"

@Component({
    selector: "app-search-result-container",
    standalone: true,
    imports: [CommonModule, SearchResultsListComponent, FilterBlockComponent],
    templateUrl: "./search-result-container.component.html",
    styleUrl: "./search-result-container.component.scss"
})
export class SearchResultContainerComponent implements OnDestroy {
    public showSearchResults: boolean = false
    private subscription: Subscription
    constructor(private searchService: SearchService) {
        this.subscription = this.searchService.searchActivated$.subscribe((activate) => {
            this.showSearchResults = activate
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

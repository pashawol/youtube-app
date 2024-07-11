import { Component, OnDestroy } from "@angular/core"
import { CommonModule } from "@angular/common" //
import { Subscription } from "rxjs"
import { FilterBlockComponent } from "../../components/filter-block/filter-block.component"
import { SearchResultsBlockComponent } from "../../components/search-results-block/search-results-block.component"
import { SearchService } from "../../services/search.service"

@Component({
    selector: "app-search-result",
    standalone: true,
    imports: [CommonModule, SearchResultsBlockComponent, FilterBlockComponent],
    templateUrl: "./search-result.component.html",
    styleUrl: "./search-result.component.scss"
})
export class SearchResultComponent implements OnDestroy {
    public showSearchResults: boolean = false
    private subscription: Subscription
    constructor(private searchService: SearchService) {
        this.subscription = this.searchService.searchActivated$.subscribe(
            (activate) => (this.showSearchResults = activate)
        )
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

import { Component, Input, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"

import { Item } from "../../models/types.model"
import response from "../../response.json"
import { FilterService } from "../../services/filter.service"
import { SearchResultsItemComponent } from "./search-results-item/search-results-item.component"
import { FilterByWordPipe } from "../../pipes/filter-by-word.pipe"
@Component({
    selector: "app-search-results-block",
    standalone: true,
    imports: [SearchResultsItemComponent, FilterByWordPipe],
    templateUrl: "./search-results-block.component.html",
    styleUrl: "./search-results-block.component.scss"
})
export class SearchResultsBlockComponent implements OnInit, OnDestroy {
    @Input() dataItems: Item[] = []

    filterCriteria: { date: string; count: string } = { date: "", count: "" }
    private subscription: Subscription

    constructor(private filterService: FilterService) {
        this.subscription = this.filterService.filter$.subscribe((data) => {
            this.filterCriteria = data
            if (this.filterCriteria.date === "dateUp") {
                this.dataItems = response.items.sort(
                    (a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt)
                )
            }
            if (this.filterCriteria.date === "dateDown") {
                this.dataItems = response.items.sort(
                    (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt)
                )
            }
            if (this.filterCriteria.count === "countUp") {
                this.dataItems = response.items.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount)
            }
            if (this.filterCriteria.count === "countDown") {
                this.dataItems = response.items.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
            }
        })
    }

    ngOnInit() {
        this.subscription = this.filterService.filter$.subscribe(({ searchText }) => {
            this.applyFilters(searchText)
        })
        // this.dataItems = response.items
    }

    applyFilters(searchText: string) {
        let filteredItems: Item[] = response.items

        if (searchText) {
            filteredItems = new FilterByWordPipe().transform(filteredItems, searchText)
        }

        this.dataItems = filteredItems
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

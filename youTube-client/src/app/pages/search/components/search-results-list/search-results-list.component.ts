import { Component, Input, OnDestroy, OnInit } from "@angular/core"
import response from "@app/response.json"
import { FilterCriteria } from "@core/components/filter-block/filter.model"
import { Subscription } from "rxjs"

import { Item } from "../../models/response.model"
import { FilterByWordPipe } from "../../pipes/filter-by-word.pipe"
import { FilterService } from "../../services/filter.service"
import { SearchResultsItemComponent } from "../search-results-item/search-results-item.component"

@Component({
    selector: "app-search-results-list",
    standalone: true,
    imports: [SearchResultsItemComponent, FilterByWordPipe],
    templateUrl: "./search-results-list.component.html",
    styleUrl: "./search-results-list.component.scss"
})
export class SearchResultsListComponent implements OnInit, OnDestroy {
    @Input() dataItems: Item[] = []

    filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }
    private subscription: Subscription

    constructor(private filterService: FilterService) {
        this.subscription = this.filterService.filter$.subscribe((data) => {
            this.filterCriteria = data
            if (this.filterCriteria.date === "dateUp") {
                this.dataItems.sort((a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt))
            }
            if (this.filterCriteria.date === "dateDown") {
                this.dataItems.sort((a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt))
            }
            if (this.filterCriteria.count === "countUp") {
                this.dataItems.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount)
            }
            if (this.filterCriteria.count === "countDown") {
                this.dataItems.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
            }
        })
    }

    ngOnInit() {
        this.dataItems = response.items
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

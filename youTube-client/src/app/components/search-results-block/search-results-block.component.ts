import { Component, Input, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from "rxjs"
import { Item } from "../../models/types.model"
import response from "../../response.json"
import { SearchResultsItemComponent } from "./search-results-item/search-results-item.component"
import { FilterService } from "../../services/filter.service"

@Component({
    selector: "app-search-results-block",
    standalone: true,
    imports: [SearchResultsItemComponent],
    templateUrl: "./search-results-block.component.html",
    styleUrl: "./search-results-block.component.scss"
})
export class SearchResultsBlockComponent implements OnInit, OnDestroy {
    @Input() dataItems: Item[] = []

    filterCriteria: { date: string; count: string; word: string } = { date: "", count: "", word: "" }
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

            if (this.filterCriteria.word !== "") {
                this.dataItems = response.items.filter((item) =>
                    item.snippet.title.toLowerCase().includes(this.filterCriteria.word)
                )
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

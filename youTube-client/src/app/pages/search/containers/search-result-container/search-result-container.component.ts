import { CommonModule } from "@angular/common" //
import { Component, Input, OnInit } from "@angular/core"
import { FilterCriteria } from "@app/core/components/filter-block/filter.model"
import response from "@app/response.json"
import { FilterBlockComponent } from "@core/components/filter-block/filter-block.component"
import { Subject } from "rxjs"
import { takeUntil } from "rxjs/operators"

import { SearchResultsListComponent } from "../../components/search-results-list/search-results-list.component"
import { Item } from "../../models/response.model"
import { FilterByWordPipe } from "../../pipes/filter-by-word.pipe"
import { FilterService } from "../../services/filter.service"
import { SearchService } from "../../services/search.service"

@Component({
    selector: "app-search-result-container",
    standalone: true,
    imports: [CommonModule, SearchResultsListComponent, FilterBlockComponent, FilterByWordPipe],
    templateUrl: "./search-result-container.component.html",
    styleUrl: "./search-result-container.component.scss"
})
export class SearchResultContainerComponent implements OnInit {
    @Input() dataItems: Item[] = response.items

    searchActivated$ = this.searchService.searchActivated$
    filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }

    toggleFilterBlock = this.filterService.filterToggle$

    private destroyed$ = new Subject<void>()

    constructor(
        private filterService: FilterService,
        private searchService: SearchService
    ) {}

    ngOnInit() {
        this.filterService.filter$.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
            this.filterCriteria = data
            this.sortDataByFilterCriteria()
        })
    }

    sortDataByFilterCriteria() {
        if (this.filterCriteria.date === "dateUp") {
            this.dataItems.sort((a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt))
        }
        if (this.filterCriteria.count === "countUp") {
            this.dataItems.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount)
        }
        if (this.filterCriteria.date === "dateDown" || this.filterCriteria.count === "countDown") {
            this.dataItems.reverse()
        }
    }
}

import { CommonModule } from "@angular/common" //
import { Component, DestroyRef, inject, Input, OnInit } from "@angular/core"
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { FilterCriteria } from "@app/core/components/filter-block/filter.model"
import { FilterBlockComponent } from "@core/components/filter-block/filter-block.component"

import { SearchResultsListComponent } from "../../components/search-results-list/search-results-list.component"
import { Item } from "../../models/response.model"
import { FilterByWordPipe } from "../../pipes/filter-by-word.pipe"
import { FilterService, RequestService, SearchService } from "../../services"

@Component({
    selector: "app-search-result-container",
    standalone: true,
    imports: [CommonModule, SearchResultsListComponent, FilterBlockComponent, FilterByWordPipe],
    templateUrl: "./search-result-container.component.html",
    styleUrl: "./search-result-container.component.scss"
})
export class SearchResultContainerComponent implements OnInit {
    @Input() dataItems: Item[] = this.requestService.search()

    searchActivated$ = this.searchService.searchActivated$
    filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }

    toggleFilterBlock = this.filterService.filterToggle$

    private destroyRef: DestroyRef

    constructor(
        private filterService: FilterService,
        private searchService: SearchService,
        private requestService: RequestService
    ) {
        this.destroyRef = inject(DestroyRef)
    }

    ngOnInit() {
        this.filterService.filter$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
            this.filterCriteria = data
            this.filterService.sortDataByFilterCriteria(this.dataItems)
        })
    }
}

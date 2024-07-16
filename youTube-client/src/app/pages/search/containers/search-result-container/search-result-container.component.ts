import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FilterCriteria } from "@app/core/components/filter-block/filter.model"
import { FilterBlockComponent } from "@core/components"
import { map, Observable, of, switchMap } from "rxjs"

import { SearchResultsListComponent } from "../../components"
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
export class SearchResultContainerComponent {
    dataItems$: Observable<Item[]> = this.getItems$()

    searchActivated$ = this.searchService.searchActivated$
    filterCriteria$: Observable<FilterCriteria> = this.filterService.filter$

    toggleFilterBlock: Observable<boolean> = this.filterService.filterToggle$

    constructor(
        private filterService: FilterService,
        private searchService: SearchService,
        private requestService: RequestService
    ) {}

    private getItems$(): Observable<Item[]> {
        return of(this.requestService.search()).pipe(
            switchMap((items: Item[]) =>
                this.filterService.filter$.pipe(map(() => this.filterService.sortDataByFilterCriteria(items)))
            )
        )
    }
}

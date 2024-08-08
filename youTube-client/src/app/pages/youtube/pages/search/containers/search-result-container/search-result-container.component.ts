import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FilterCriteria } from "@app/core/models/filter.model"
import { selectVideos } from "@app/store/selectors/video.selectors"
import { FilterBlockComponent } from "@core/components"
import { Store } from "@ngrx/store"
import { Item } from "@shared/models/response.model"
import { map, Observable, switchMap } from "rxjs"

import { SearchResultsListComponent } from "../../components"
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
    // eslint-disable-next-line @ngrx/prefer-selector-in-select
    dataItems$: Observable<Item[]> = this.getItems$()

    searchActivated$: Observable<boolean> = this.searchService.searchActivated$
    filterCriteria$: Observable<FilterCriteria> = this.filterService.filter$

    toggleFilterBlock: Observable<boolean> = this.filterService.filterToggle$
    videos$: Observable<Item[]>

    constructor(
        private filterService: FilterService,
        private searchService: SearchService,
        private requestService: RequestService,
        private store: Store
    ) {
        this.videos$ = this.store.select(selectVideos)
    }

    private getItems$(): Observable<Item[]> {
        return this.searchService.searchQuery$.pipe(
            switchMap((query) =>
                this.requestService
                    .search(query)
                    .pipe(
                        switchMap((items: Item[]) =>
                            this.filterService.filter$.pipe(
                                map(() => this.filterService.sortDataByFilterCriteria(items))
                            )
                        )
                    )
            )
        )
    }
}

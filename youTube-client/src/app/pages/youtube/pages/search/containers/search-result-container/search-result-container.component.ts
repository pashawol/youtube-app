import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { FilterCriteria } from "@app/core/models/filter.model"
import { loadVideos } from "@app/store/actions/video.actions"
import { selectLocalVideos, selectVideos } from "@app/store/selectors/video.selectors"
import { FilterBlockComponent } from "@core/components"
import { Store } from "@ngrx/store"

import { Item } from "@shared/models/response.model"
import { Observable } from "rxjs"

import { SearchResultsListComponent } from "../../components"
import { FilterByWordPipe } from "../../pipes/filter-by-word.pipe"
import { FilterService } from "../../services"

@Component({
    selector: "app-search-result-container",
    standalone: true,
    imports: [CommonModule, SearchResultsListComponent, FilterBlockComponent, FilterByWordPipe],
    templateUrl: "./search-result-container.component.html",
    styleUrl: "./search-result-container.component.scss"
})
export class SearchResultContainerComponent implements OnInit {
    videos$: Observable<Item[]> = this.store.select(selectVideos)
    videosLocal$: Observable<Item[]> = this.store.select(selectLocalVideos)

    // searchActivated$: Observable<boolean> = this.searchService.searchActivated$
    filterCriteria$: Observable<FilterCriteria> = this.filterService.filter$

    toggleFilterBlock: Observable<boolean> = this.filterService.filterToggle$

    constructor(
        private filterService: FilterService,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.store.dispatch(loadVideos())
    }
}

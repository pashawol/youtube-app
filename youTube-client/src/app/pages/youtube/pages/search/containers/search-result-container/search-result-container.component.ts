import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { toSignal } from "@angular/core/rxjs-interop"
import { NavigationService } from "@app/shared/services/navigation.service"
import { loadVideos } from "@app/store/actions/video.actions"
import { selectLocalVideos, selectVideos } from "@app/store/selectors/video.selectors"
import { FilterBlockComponent, SearchResultsListComponent } from "@core/components"
import { Store } from "@ngrx/store"

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
    tokenPage$ = this.navigationService.tokenPageQuery$()
    videos$ = toSignal(this.store.select(selectVideos))
    videosLocal$ = toSignal(this.store.select(selectLocalVideos))

    filterCriteria$ = toSignal(this.filterService.filter$)
    toggleFilterBlock = toSignal(this.filterService.filterToggle$)

    constructor(
        private filterService: FilterService,
        private navigationService: NavigationService,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.store.dispatch(loadVideos())
    }
}

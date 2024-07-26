import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RequestService } from "@app/pages/youtube/pages/search/services"
import { SearchService } from "@app/pages/youtube/pages/search/services/search.service"
import { ButtonComponent } from "@shared/components"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from "rxjs"

@Component({
    selector: "app-search-block",
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonComponent],
    templateUrl: "./search-block.component.html",
    styleUrl: "./search-block.component.scss"
})
export class SearchBlockComponent implements OnInit {
    searchText: string = ""
    private searchTextChanged = new Subject<string>()
    private destroy$ = new Subject<void>()

    constructor(
        private searchService: SearchService,
        private requestService: RequestService
    ) {}

    ngOnInit(): void {
        this.searchTextChanged
            .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((searchText) => {
                if (searchText.length > 2) {
                    this.requestService.setQuery(searchText.trim())
                    this.searchService.activateSearch(true)
                }
            })
    }

    onInputChange() {
        this.searchTextChanged.next(this.searchText)
    }
    ngOnDestroy() {
        this.destroy$.next()
        this.destroy$.complete()
    }
    onSubmit() {
        this.searchService.activateSearch(true)
    }
}

import { Component, DestroyRef, OnInit } from "@angular/core"
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { FormsModule } from "@angular/forms"
import { SearchService } from "@app/pages/youtube/pages/search/services/search.service"
import { ButtonComponent } from "@shared/components"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"
import { debounceTime, distinctUntilChanged, filter, Subject } from "rxjs"

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

    constructor(
        private searchService: SearchService,
        private destroyRef: DestroyRef
    ) {}

    ngOnInit(): void {
        this.searchTextChanged
            .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .pipe(filter((searchText) => searchText.length > 2))
            .subscribe((searchText) => {
                this.searchService.setQuery(searchText.trim())
                this.searchService.activateSearch(true)
            })
    }

    onInputChange() {
        this.searchTextChanged.next(this.searchText)
    }
    onSubmit() {
        this.searchService.activateSearch(true)
    }
}

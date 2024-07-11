import { Component } from "@angular/core"

import { FilterBlockComponent } from "../../components/filter-block/filter-block.component"
import { SearchResultsBlockComponent } from "../../components/search-results-block/search-results-block.component"

@Component({
    selector: "app-search-result",
    standalone: true,
    imports: [SearchResultsBlockComponent, FilterBlockComponent],
    templateUrl: "./search-result.component.html",
    styleUrl: "./search-result.component.scss"
})
export class SearchResultComponent {}

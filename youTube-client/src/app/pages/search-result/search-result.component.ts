import { Component } from "@angular/core"

import { SearchResultsBlockComponent } from "../../components/search-results-block/search-results-block.component"
import { FilterBlockComponent } from "../../components/filter-block/filter-block.component"

@Component({
    selector: "app-search-result",
    standalone: true,
    imports: [SearchResultsBlockComponent, FilterBlockComponent],
    templateUrl: "./search-result.component.html",
    styleUrl: "./search-result.component.scss"
})
export class SearchResultComponent {}

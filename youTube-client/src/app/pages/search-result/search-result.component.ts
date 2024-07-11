import { Component } from "@angular/core"

import { SearchResultsBlockComponent } from "../../components/search-results-block/search-results-block.component"

@Component({
    selector: "app-search-result",
    standalone: true,
    imports: [SearchResultsBlockComponent],
    templateUrl: "./search-result.component.html",
    styleUrl: "./search-result.component.scss"
})
export class SearchResultComponent {}

import { Component, Input, OnInit } from "@angular/core"

import { Item } from "../../models/types.model"
import response from "../../response.json"
import { SearchResultsItemComponent } from "./search-results-item/search-results-item.component"

@Component({
    selector: "app-search-results-block",
    standalone: true,
    imports: [SearchResultsItemComponent],
    templateUrl: "./search-results-block.component.html",
    styleUrl: "./search-results-block.component.scss"
})
export class SearchResultsBlockComponent implements OnInit {
    @Input() dataItems: Item[] = []

    ngOnInit() {
        this.dataItems = response.items
    }
}

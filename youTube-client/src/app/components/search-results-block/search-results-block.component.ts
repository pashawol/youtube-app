import { Component, Input } from "@angular/core"
import { Item } from "../../models/types.model"
import { SearchResultsItemComponent } from "./search-results-item/search-results-item.component"
import response from "../../response.json"

@Component({
    selector: "app-search-results-block",
    standalone: true,
    imports: [SearchResultsItemComponent],
    templateUrl: "./search-results-block.component.html",
    styleUrl: "./search-results-block.component.scss"
})
export class SearchResultsBlockComponent {
    @Input() dataItems: Item[] = []

    ngOnInit() {
        this.dataItems = response.items
    }
}

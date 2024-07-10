import { Component, Input } from "@angular/core"
import { CardModule } from "primeng/card"
import { ButtonModule } from "primeng/button"
import { ButtonComponent } from "../../shared/button/button.component"
import { Item } from "../../../models/types.model"
@Component({
    selector: "app-search-results-item",
    standalone: true,
    imports: [CardModule, ButtonModule, ButtonComponent],
    templateUrl: "./search-results-item.component.html",
    styleUrl: "./search-results-item.component.scss"
})
export class SearchResultsItemComponent {
    @Input() data!: Item
}

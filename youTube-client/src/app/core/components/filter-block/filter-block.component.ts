import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { FilterService } from "@pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components"
import { InputTextModule } from "primeng/inputtext"

import { FilterCriteria } from "./filter.model"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [CommonModule, ButtonComponent, FormsModule, InputTextModule],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent {
    @Input() filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }

    constructor(private filterService: FilterService) {}

    onButtonClick(filterCriteria: string) {
        this.filterService.onButtonClick(filterCriteria)
    }
    onInputChange() {
        this.filterService.onInputChange()
    }
}

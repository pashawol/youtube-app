import { CommonModule } from "@angular/common"
import { Component, Input, OnChanges, signal, SimpleChanges } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { FilterService } from "@app/pages/youtube/pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components"
import { InputTextModule } from "primeng/inputtext"

import { FilterCriteria } from "../../models/filter.model"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [CommonModule, ButtonComponent, FormsModule, InputTextModule],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent implements OnChanges {
    @Input() filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }

    searchText = signal<string>("")

    constructor(private filterService: FilterService) {}

    ngOnChanges({ filterCriteria }: SimpleChanges) {
        if (filterCriteria?.currentValue && filterCriteria?.firstChange) {
            this.searchText.set(filterCriteria.currentValue.searchText)
        }
    }
    onButtonClick(filterData: string) {
        this.filterService.onButtonClick(filterData)
    }
    onInputChange() {
        this.filterService.onInputChange(this.searchText())
    }
}

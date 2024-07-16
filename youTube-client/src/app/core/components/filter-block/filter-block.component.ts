import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { FilterService } from "@pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components"
import { InputTextModule } from "primeng/inputtext"
import { Subject } from "rxjs"
import { takeUntil } from "rxjs/operators"

import { FilterCriteria } from "./filter.model"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [CommonModule, ButtonComponent, FormsModule, InputTextModule],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent implements OnInit {
    filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }
    private destroyed$ = new Subject<void>()

    constructor(private filterService: FilterService) {}

    ngOnInit() {
        this.filterService.filter$.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
            this.filterCriteria = data
        })
    }

    onButtonClick(filterCriteria: string) {
        let direction = ""
        if (filterCriteria === "date") {
            direction = this.filterCriteria.date !== "dateUp" ? "Up" : "Down"

            this.filterService.setFilterData({
                date: filterCriteria + direction,
                count: "",
                searchText: this.filterCriteria.searchText
            })
        }
        if (filterCriteria === "count") {
            direction = this.filterCriteria.count !== "countUp" ? "Up" : "Down"

            this.filterService.setFilterData({
                date: "",
                count: filterCriteria + direction,
                searchText: this.filterCriteria.searchText
            })
        }
    }

    onInputChange() {
        this.filterService.setFilterData(this.filterCriteria)
    }
}

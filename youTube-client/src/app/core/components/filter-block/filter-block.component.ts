import { Component, OnDestroy } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { FilterService } from "@pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components/button/button.component"
import { InputTextModule } from "primeng/inputtext"
import { Subscription } from "rxjs"

import { FilterCriteria } from "./filter.model"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [ButtonComponent, FormsModule, InputTextModule],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent implements OnDestroy {
    searchText!: string

    filterCriteria: FilterCriteria = { date: "", count: "", searchText: this.searchText }
    private subscription: Subscription

    toggleFilterBlock: boolean = false
    private toggleSubscription: Subscription

    constructor(private filterService: FilterService) {
        this.subscription = this.filterService.filter$.subscribe((data) => {
            this.filterCriteria = data
        })

        this.toggleSubscription = this.filterService.filterToggle$.subscribe((state) => {
            this.toggleFilterBlock = state
        })
    }

    onButtonClick(filterCriteria: string) {
        let way = ""
        if (filterCriteria === "date") {
            way = this.filterCriteria.date !== "dateUp" ? "Up" : "Down"

            this.filterService.setFilterData({
                date: filterCriteria + way,
                count: "",
                searchText: this.filterCriteria.searchText
            })
        }
        if (filterCriteria === "count") {
            way = this.filterCriteria.count !== "countUp" ? "Up" : "Down"

            this.filterService.setFilterData({
                date: "",
                count: filterCriteria + way,
                searchText: this.filterCriteria.searchText
            })
        }
    }
    onINputChange() {
        this.filterService.setFilterData(this.filterCriteria)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

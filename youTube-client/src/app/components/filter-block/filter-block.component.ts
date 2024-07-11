import { Component, OnDestroy } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { InputTextModule } from "primeng/inputtext"
import { Subscription } from "rxjs"

import { FilterCriteria } from "../../models/types.model"
import { FilterByWordPipe } from "../../pipes/filter-by-word.pipe"
import { FilterService } from "../../services/filter.service"
import { ButtonComponent } from "../shared/button/button.component"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [ButtonComponent, FormsModule, InputTextModule, FilterByWordPipe],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent implements OnDestroy {
    searchText!: string

    filterCriteria: FilterCriteria = { date: "", count: "", searchText: "" }
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
            if (this.filterCriteria.date !== "dateUp") {
                way = "Up"
            } else {
                way = "Down"
            }
            this.filterService.setFilterData({
                date: filterCriteria + way,
                count: "",
                searchText: this.filterCriteria.searchText
            })
        }
        if (filterCriteria === "count") {
            if (this.filterCriteria.count !== "countUp") {
                way = "Up"
            } else {
                way = "Down"
            }

            this.filterService.setFilterData({
                date: "",
                count: filterCriteria + way,
                searchText: this.filterCriteria.searchText
            })
        }
    }
    onINputChange() {
        this.filterService.setFilterData({
            date: this.filterCriteria.date,
            count: this.filterCriteria.count,
            searchText: this.searchText
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

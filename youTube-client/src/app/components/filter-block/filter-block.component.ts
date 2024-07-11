import { Component, OnDestroy } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { InputTextModule } from "primeng/inputtext"
import { ButtonComponent } from "../shared/button/button.component"
import { FilterService } from "../../services/filter.service"
import { Subscription } from "rxjs"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [ButtonComponent, FormsModule, InputTextModule],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent {
    value!: string

    filterCriteria: { date: string; count: string; word: string } = { date: "", count: "", word: "" }
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
            this.filterService.setFilterData({ date: filterCriteria + way, count: "", word: this.filterCriteria.word })
        }
        if (filterCriteria === "count") {
            if (this.filterCriteria.count !== "countUp") {
                way = "Up"
            } else {
                way = "Down"
            }

            this.filterService.setFilterData({ date: "", count: filterCriteria + way, word: this.filterCriteria.word })
        }
    }
    onINputChange() {
        this.filterService.setFilterData({
            date: this.filterCriteria.date,
            count: this.filterCriteria.count,
            word: this.value.trim().toLowerCase()
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

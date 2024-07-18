import { Injectable } from "@angular/core"
import { FilterCriteria } from "@app/core/models/filter.model"
import { Item } from "@shared/models/response.model"
import { BehaviorSubject, Subject } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class FilterService {
    public filterSubject = new BehaviorSubject<FilterCriteria>({
        date: "",
        count: "",
        searchText: ""
    })
    public filter$ = this.filterSubject.asObservable()

    private filterToggleSubject = new Subject<boolean>()
    filterToggle$ = this.filterToggleSubject.asObservable()

    setFilterData(criteria: Partial<FilterCriteria>) {
        this.filterSubject.next({ ...this.filterSubject.value, ...criteria })
    }

    toggleFilter(value: boolean) {
        this.filterToggleSubject.next(value)
    }

    onButtonClick(filterCriteria: string) {
        let direction = ""
        if (filterCriteria === "date") {
            direction = this.filterSubject.value.date !== "dateUp" ? "Up" : "Down"

            this.setFilterData({
                date: filterCriteria + direction,
                count: "",
                searchText: this.filterSubject.value.searchText
            })
        }
        if (filterCriteria === "count") {
            direction = this.filterSubject.value.count !== "countUp" ? "Up" : "Down"

            this.setFilterData({
                date: "",
                count: filterCriteria + direction,
                searchText: this.filterSubject.value.searchText
            })
        }
    }

    onInputChange(searchText: string) {
        this.setFilterData({ searchText: searchText.trim() })
    }

    sortDataByFilterCriteria(data: Item[]): Item[] {
        const sorted: Item[] = [...data]

        if (this.filterSubject.value.date === "dateUp") {
            sorted.sort((a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt))
        }
        if (this.filterSubject.value.date === "dateDown") {
            sorted.sort((a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt))
        }

        if (this.filterSubject.value.count === "countUp") {
            sorted.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount)
        }

        if (this.filterSubject.value.count === "countDown") {
            sorted.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
        }

        return sorted
    }
}

import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"

import { FilterCriteria } from "../models/types.model"

@Injectable({
    providedIn: "root"
})
export class FilterService {
    private filterSubject = new BehaviorSubject<FilterCriteria>({
        date: "",
        count: "",
        searchText: ""
    })
    public filter$ = this.filterSubject.asObservable()

    private filterToggleSubject = new Subject<boolean>()
    filterToggle$ = this.filterToggleSubject.asObservable()

    setFilterData(criteria: { date?: string; count?: string; searchText?: string }) {
        this.filterSubject.next({ ...this.filterSubject.value, ...criteria })
    }

    toggleFilter(value: boolean) {
        this.filterToggleSubject.next(value)
    }
}

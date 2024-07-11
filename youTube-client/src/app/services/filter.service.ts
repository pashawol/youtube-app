import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class FilterService {
    private filterSubject = new BehaviorSubject<{ date: string; count: string; word: string }>({
        date: "",
        count: "",
        word: ""
    })
    public filter$ = this.filterSubject.asObservable()

    private filterToggleSubject = new Subject<boolean>()
    filterToggle$ = this.filterToggleSubject.asObservable()

    setFilterData(data: { date: string; count: string; word: string }) {
        this.filterSubject.next(data)
    }

    toggleFilter(value: boolean) {
        this.filterToggleSubject.next(value)
    }
}

import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

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

    setFilterData(data: { date: string; count: string; word: string }) {
        this.filterSubject.next(data)
    }
}

import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class SearchService {
    private searchActivatedSource = new BehaviorSubject<boolean>(false)
    searchActivated$ = this.searchActivatedSource.asObservable()

    public searchQuerySubject = new BehaviorSubject<string>("")
    public searchQuery$ = this.searchQuerySubject.asObservable()

    setQuery(query: string) {
        this.searchQuerySubject.next(query)
    }

    activateSearch(activate: boolean) {
        this.searchActivatedSource.next(activate)
    }
}

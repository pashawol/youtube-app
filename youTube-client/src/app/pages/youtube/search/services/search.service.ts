import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class SearchService {
    private searchActivatedSource = new BehaviorSubject<boolean>(false)
    searchActivated$ = this.searchActivatedSource.asObservable()

    activateSearch(activate: boolean) {
        this.searchActivatedSource.next(activate)
    }
}

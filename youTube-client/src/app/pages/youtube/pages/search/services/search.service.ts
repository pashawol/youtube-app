import { Injectable, signal } from "@angular/core"

@Injectable({
    providedIn: "root"
})
export class SearchService {
    searchActivated$ = signal<boolean>(false)
    searchQuery$ = signal<string>("")

    setQuery(query: string) {
        this.searchQuery$.set(query)
    }

    activateSearch(activate: boolean) {
        this.searchActivated$.set(activate)
    }
}

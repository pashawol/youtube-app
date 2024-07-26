import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@environments/environment.development"
import { Item } from "@shared/models/response.model"
import { BehaviorSubject, Observable, forkJoin } from "rxjs"
import { map, switchMap } from "rxjs/operators"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    private apiUrl = environment.apiUrl
    private apiKey = environment.apiKey

    public searchQuerySubject = new BehaviorSubject<string>("")
    public searchQuery$ = this.searchQuerySubject.asObservable()

    setQuery(query: string) {
        this.searchQuerySubject.next(query)
    }

    constructor(private http: HttpClient) {}

    search(): Observable<Item[]> {
        const searchParams = {
            part: "id",
            q: this.searchQuerySubject.value,
            key: this.apiKey,
            type: "video",
            maxResults: "25"
        }
        if (!searchParams.q) return forkJoin([])

        return this.http
            .get<{ items: { id: { videoId: string } }[] }>(`${this.apiUrl}/search`, { params: searchParams })
            .pipe(
                switchMap((searchResponse) => {
                    const videoIds = searchResponse.items.map((item) => item.id.videoId).join(",")

                    const statsParams = {
                        part: "snippet,statistics",
                        id: videoIds,
                        key: this.apiKey
                    }

                    return this.http
                        .get<{ items: Item[] }>(`${this.apiUrl}/videos`, { params: statsParams })
                        .pipe(map((statsResponse) => statsResponse.items))
                })
            )
    }
}

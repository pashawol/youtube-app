import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@environments/environment.development"
import { Item } from "@shared/models/response.model"
import { Observable, forkJoin } from "rxjs"
import { map, switchMap } from "rxjs/operators"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    private apiUrl = environment.apiUrl
    private apiKey = environment.apiKey

    constructor(private http: HttpClient) {}

    search(query: string): Observable<Item[]> {
        const searchParams = {
            part: "id",
            q: query,
            key: this.apiKey,
            type: "video",
            maxResults: "25"
        }
        if (!query) return forkJoin([])

        return this.http
            .get<{ items: { id: { videoId: string } }[] }>(`${this.apiUrl}/search`, { params: searchParams })
            .pipe(
                map((searchResponse) => searchResponse.items.map((item) => item.id.videoId).join(",")),

                map((videoIds) => ({
                    part: "snippet,statistics",
                    id: videoIds,
                    key: this.apiKey
                })),

                switchMap((statsParams) =>
                    this.http
                        .get<{ items: Item[] }>(`${this.apiUrl}/videos`, { params: statsParams })
                        .pipe(map((statsResponse) => statsResponse.items))
                )
            )
    }
}

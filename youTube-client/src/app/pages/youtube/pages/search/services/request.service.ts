import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Item } from "@shared/models/response.model"
import { forkJoin, Observable } from "rxjs"
import { map, switchMap } from "rxjs/operators"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    constructor(private http: HttpClient) {}

    search(query: string, pageToken: string = ""): Observable<Item[]> {
        if (!query) return forkJoin([])

        const searchParams = {
            part: "id",
            q: query,
            type: "video",
            maxResults: "10",
            pageToken: "CBQQAA"
            // pageToken: "CAoQAA"
        }

        if (!query) return forkJoin([])

        return this.http.get<{ items: { id: { videoId: string } }[] }>("/search", { params: searchParams }).pipe(
            map((searchResponse) => searchResponse.items.map((item) => item.id.videoId).join(",")),

            map((videoIds) => ({
                part: "snippet,statistics",
                id: videoIds
            })),

            switchMap((statsParams) =>
                this.http
                    .get<{ items: Item[] }>("/videos", { params: statsParams })
                    .pipe(map((statsResponse) => statsResponse.items))
            )
        )
    }
}

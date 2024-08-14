import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { NavigationService } from "@app/shared/services/navigation.service"
import { Item } from "@shared/models/response.model"
import { BehaviorSubject, forkJoin, Observable } from "rxjs"
import { map, switchMap } from "rxjs/operators"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    constructor(
        private http: HttpClient,
        private navigationService: NavigationService
    ) {}

    search(query: string, pageToken: string = ""): Observable<Item[]> {
        if (!query) return forkJoin([])

        const searchParams = {
            part: "id",
            q: query,
            type: "video",
            maxResults: "20",
            pageToken
        }

        return this.http
            .get<{
                items: { id: { videoId: string } }[]
                prevPageToken: string
                nextPageToken: string
            }>("/search", { params: searchParams })
            .pipe(
                map((searchResponse) => {
                    this.navigationService.setTokenPagesQuery({
                        prev: searchResponse.prevPageToken,
                        next: searchResponse.nextPageToken
                    })
                    return searchResponse
                }),
                map((searchResponse) => ({
                    videoIds: searchResponse.items.map((item) => item.id.videoId).join(",")
                })),

                map((videoIds) => ({
                    part: "snippet,statistics",
                    id: videoIds.videoIds
                })),

                switchMap((statsParams) =>
                    this.http
                        .get<{
                            items: Item[]
                        }>("/videos", { params: statsParams })
                        .pipe(map((statsResponse) => statsResponse.items))
                )
            )
    }
}

import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Item } from "@shared/models/response.model"
import { BehaviorSubject, forkJoin, Observable } from "rxjs"
import { map, switchMap } from "rxjs/operators"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    private tokenPageQuerySubject = new BehaviorSubject<{ prev: string; next: string }>({ prev: "", next: "" })
    public tokenPageQuery$ = this.tokenPageQuerySubject.asObservable()

    private currentTokenPageSubject = new BehaviorSubject<string>("")
    public currentTokenPage$ = this.currentTokenPageSubject.asObservable()

    constructor(private http: HttpClient) {}

    setTokenPage(token: string) {
        this.currentTokenPageSubject.next(token)
    }

    search(query: string, pageToken: string = ""): Observable<Item[]> {
        if (!query) return forkJoin([])

        const searchParams = {
            part: "id",
            q: query,
            type: "video",
            maxResults: "25",
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
                    this.tokenPageQuerySubject.next({
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

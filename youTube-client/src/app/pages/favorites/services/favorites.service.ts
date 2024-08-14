import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Item } from "@shared/models/response.model"
import { forkJoin, Observable } from "rxjs"
import { map } from "rxjs/operators"

@Injectable({
    providedIn: "root"
})
export class FavoritesService {
    constructor(private http: HttpClient) {}

    getFavorites(ids: string[]): Observable<Item[]> {
        if (!ids.length) return forkJoin([])

        const params = {
            part: "snippet,statistics",
            id: ids.join(",")
        }
        return this.http
            .get<{
                items: Item[]
            }>("/videos", { params })
            .pipe(map((statsResponse) => statsResponse.items))
    }
}

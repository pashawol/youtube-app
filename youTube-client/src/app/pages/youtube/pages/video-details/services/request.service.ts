import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Item } from "@shared/models/response.model"
import { map, Observable } from "rxjs" // Import Observable and of

@Injectable({
    providedIn: "root"
})
export class RequestService {
    constructor(private http: HttpClient) {}

    fetchData(id: string): Observable<Item> {
        const statsParams = {
            part: "snippet,statistics",
            id
        }

        return this.http
            .get<{ items: Item[] }>("/videos", { params: statsParams })
            .pipe(map((statsResponse) => statsResponse.items[0]))
    }
}

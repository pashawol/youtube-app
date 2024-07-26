import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import response from "@app/response.json"
import { environment } from "@environments/environment.development"
import { Item } from "@shared/models/response.model"
import { map, Observable } from "rxjs" // Import Observable and of

@Injectable({
    providedIn: "root"
})
export class RequestService {
    private response = response
    private apiUrl = environment.apiUrl
    private apiKey = environment.apiKey

    constructor(private http: HttpClient) {}

    fetchData(id: string): Observable<Item> {
        const statsParams = {
            part: "snippet,statistics",
            id,
            key: this.apiKey
        }

        return this.http.get<{ items: Item[] }>(`${this.apiUrl}/videos`, { params: statsParams }).pipe(
            map((statsResponse) => {
                return statsResponse.items[0]
            })
        )
    }
}

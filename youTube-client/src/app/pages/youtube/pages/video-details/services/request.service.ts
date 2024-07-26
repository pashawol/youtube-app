import { Injectable } from "@angular/core"
import response from "@app/response.json"
import { Item, Item2 } from "@shared/models/response.model"
import { Observable, of } from "rxjs" // Import Observable and of

@Injectable({
    providedIn: "root"
})
export class RequestService {
    private response = response

    fetchData(id: string | null = ""): Observable<Item2> {
        // Use of to create an Observable from the synchronous data
        return of(this.response.items.find((item: Item2) => item.id === id) as Item2)
    }
}

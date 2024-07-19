import { Injectable } from "@angular/core"
import response from "@app/response.json"
import { Item } from "@shared/models/response.model"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    private response = response
    search(): Item[] {
        return this.response.items
    }
}

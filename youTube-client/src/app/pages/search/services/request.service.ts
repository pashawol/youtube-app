import { Injectable } from "@angular/core"
import response from "@app/response.json"

@Injectable({
    providedIn: "root"
})
export class RequestService {
    response = response
    search() {
        return this.response.items
    }
}

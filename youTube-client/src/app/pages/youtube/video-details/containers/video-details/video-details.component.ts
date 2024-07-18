import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Item } from "@shared/models/response.model"
import { Observable } from "rxjs"

import { RequestService } from "../../services/request.service"

@Component({
    selector: "app-video-details",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./video-details.component.html",
    styleUrl: "./video-details.component.scss"
})
export class VideoDetailsComponent {
    data$: Observable<Item> = this.getVideoDetails(this.route.snapshot.paramMap.get("id"))

    constructor(
        private requestService: RequestService,
        private route: ActivatedRoute
    ) {}

    private getVideoDetails(id: string | null): Observable<Item> {
        return this.requestService.fetchData(id)
    }
}

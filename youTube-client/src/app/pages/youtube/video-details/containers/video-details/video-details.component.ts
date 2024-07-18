import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { ActivatedRoute } from "@angular/router"
import { Item } from "@shared/models/response.model"
import { Observable } from "rxjs"

import { HighlightDirective } from "../../../directives/highlight.directive"
import { RequestService } from "../../services/request.service"

@Component({
    selector: "app-video-details",
    standalone: true,
    imports: [CommonModule, HighlightDirective],
    templateUrl: "./video-details.component.html",
    styleUrl: "./video-details.component.scss"
})
export class VideoDetailsComponent {
    data$: Observable<Item> = this.getVideoDetails(this.route.snapshot.paramMap.get("id"))

    constructor(
        private requestService: RequestService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) {}

    private getVideoDetails(id: string | null): Observable<Item> {
        return this.requestService.fetchData(id)
    }
    getSafeUrl(videoId: string): SafeResourceUrl {
        const url = `https://www.youtube.com/embed/${videoId}`
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
}

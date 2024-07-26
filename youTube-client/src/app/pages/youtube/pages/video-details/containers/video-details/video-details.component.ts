import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { ActivatedRoute, Router } from "@angular/router"
import { Item2 } from "@shared/models/response.model"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

import { HighlightDirective } from "../../../../directives/highlight.directive"
import { RequestService } from "../../services/request.service"

@Component({
    selector: "app-video-details",
    standalone: true,
    imports: [CommonModule, HighlightDirective],
    templateUrl: "./video-details.component.html",
    styleUrl: "./video-details.component.scss"
})
export class VideoDetailsComponent {
    data$: Observable<Item2> = this.getVideoDetails(this.route.snapshot.paramMap.get("id"))

    constructor(
        private requestService: RequestService,
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer
    ) {}

    private getVideoDetails(id: string | null): Observable<Item2> {
        return this.requestService.fetchData(id).pipe(
            tap((data: Item2) => {
                if (!data) {
                    this.router.navigate(["error"])
                }
            })
        )
    }
    getSafeUrl(videoId: string): SafeResourceUrl {
        const url = `https://www.youtube.com/embed/${videoId}`
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
}

import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { ActivatedRoute } from "@angular/router"
import { getVideoById } from "@app/store/actions/video.actions"
import { selectVideo } from "@app/store/selectors/video.selectors"
import { Store } from "@ngrx/store"
import { Item } from "@shared/models/response.model"
import { Observable } from "rxjs"

import { HighlightDirective } from "../../../../directives/highlight.directive"

@Component({
    selector: "app-video-details",
    standalone: true,
    imports: [CommonModule, HighlightDirective],
    templateUrl: "./video-details.component.html",
    styleUrl: "./video-details.component.scss"
})
export class VideoDetailsComponent implements OnInit {
    id: string = this.route.snapshot.paramMap.get("id")
    video$: Observable<Item> = this.store.select(selectVideo)

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private store: Store
    ) {}

    // private getVideoDetails(id: string): Observable<Item> {
    //     if (!id) return of([] as unknown as Item)
    //     return this.requestService.fetchData(id).pipe(
    //         tap((data: Item) => {
    //             if (!data) {
    //                 this.router.navigate(["error"])
    //             }
    //         })
    //     )
    // }

    getSafeUrl(videoId: string): SafeResourceUrl {
        const url = `https://www.youtube.com/embed/${videoId}`
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    ngOnInit(): void {
        this.store.dispatch(getVideoById({ id: this.id }))
    }
}

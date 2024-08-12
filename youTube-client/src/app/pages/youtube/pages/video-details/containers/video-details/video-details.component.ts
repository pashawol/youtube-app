import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { ActivatedRoute } from "@angular/router"
import { ButtonComponent, RemoveButtonComponent, FavoriteButtonComponent } from "@app/shared/components"
import { shared } from "@app/shared/constants/shared.constants"
import { getVideoById } from "@app/store/actions/video.actions"
import { selectLocalVideoById, selectVideo } from "@app/store/selectors/video.selectors"
import { Store } from "@ngrx/store"
import { Item } from "@shared/models/response.model"
import { Observable } from "rxjs"

import { HighlightDirective } from "../../../../directives/highlight.directive"

@Component({
    selector: "app-video-details",
    standalone: true,
    imports: [CommonModule, HighlightDirective, ButtonComponent, RemoveButtonComponent, FavoriteButtonComponent],
    templateUrl: "./video-details.component.html",
    styleUrl: "./video-details.component.scss"
})
export class VideoDetailsComponent implements OnInit {
    id: string = this.route.snapshot.paramMap.get("id")
    PREFIX = shared.PREFIX
    isLocal: boolean = this.id.includes(this.PREFIX)

    video$: Observable<Item> = this.isLocal
        ? this.store.select(selectLocalVideoById(this.id))
        : this.store.select(selectVideo)

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private store: Store
    ) {}

    getSafeUrl(videoId: string): SafeResourceUrl {
        const url = `https://www.youtube.com/embed/${videoId}`
        return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace(this.PREFIX, ""))
    }

    ngOnInit(): void {
        if (!this.isLocal) {
            this.store.dispatch(getVideoById({ id: this.id }))
        }
    }
}

import { Injectable } from "@angular/core"
import { FilterService, SearchService } from "@app/pages/youtube/pages/search/services"
import { Item } from "@app/shared/models/response.model"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Action, Store } from "@ngrx/store"
import { RequestService } from "@pages/youtube/pages/search/services/request.service"
import { RequestService as DetailService } from "@pages/youtube/pages/video-details/services/request.service"
import { Observable, of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"

import * as VideoActions from "../actions/video.actions"

@Injectable()
export class VideoEffects {
    constructor(
        private actions$: Actions,
        private requestService: RequestService,
        private filterService: FilterService,
        private searchService: SearchService,
        private detailService: DetailService,
        private readonly store: Store
    ) {}

    getVideoById$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(VideoActions.getVideoById),
            switchMap(({ id }) =>
                this.detailService.fetchData(id).pipe(
                    map((video: Item) => VideoActions.getVideoByIdSuccess({ video })),
                    catchError((error) => of(VideoActions.getVideoByIdFailure({ error: error.message })))
                )
            )
        )
    })

    loadVideos$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(VideoActions.loadVideos),
            switchMap(() =>
                this.searchService.searchQuery$.pipe(
                    switchMap((query) =>
                        this.requestService.currentTokenPage$.pipe(
                            switchMap((pageToken) =>
                                this.requestService.search(query, pageToken).pipe(
                                    switchMap((items) =>
                                        this.filterService.filter$.pipe(
                                            map(() => this.filterService.sortDataByFilterCriteria(items))
                                        )
                                    ),
                                    map((videos) => VideoActions.loadVideosSuccess({ videos })),
                                    catchError((error) => of(VideoActions.loadVideosFailure({ error: error.message })))
                                )
                            )
                        )
                    )
                )
            )
        )
    })
}

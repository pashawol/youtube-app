import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Action, Store } from "@ngrx/store"
import { RequestService } from "@pages/youtube/pages/search/services/request.service"
import { RequestService as VideoService } from "@pages/youtube/pages/video-details/services/request.service"
import { Observable, of } from "rxjs"
import { catchError, map, mergeMap } from "rxjs/operators"

import * as VideoActions from "../actions/video.actions"

@Injectable()
export class VideoEffects {
    constructor(
        private actions$: Actions,
        private requestService: RequestService,
        private videoService: VideoService,
        private readonly store: Store
    ) {}

    getVideoById$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(VideoActions.getVideoById),
            mergeMap(
                ({ id }): Observable<Action> =>
                    this.videoService.fetchData(id).pipe(
                        map((video) => VideoActions.getVideoByIdSuccess({ video })),
                        catchError((error) => of(VideoActions.getVideoByIdFailure({ error })))
                    )
            )
        )
    })

    loadVideos$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(VideoActions.loadVideos),
            mergeMap(
                ({ value }): Observable<Action> =>
                    // this.requestService.search(value).pipe(
                    this.requestService.search(value).pipe(
                        map((videos) => VideoActions.loadVideosSuccess({ videos })),
                        catchError((error) => of(VideoActions.loadVideosFailure({ error })))
                    )
            )
        )
    })
}

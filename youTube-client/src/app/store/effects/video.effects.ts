import { computed, inject, Injectable, Signal } from "@angular/core"
import { toObservable } from "@angular/core/rxjs-interop"
import { FilterService, SearchService } from "@app/pages/youtube/pages/search/services"
import { Item } from "@app/shared/models/response.model"
import { NavigationService } from "@app/shared/services/navigation.service"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Action } from "@ngrx/store"
import { RequestService } from "@pages/youtube/pages/search/services/request.service"
import { RequestService as DetailService } from "@pages/youtube/pages/video-details/services/request.service"
import { Observable, of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"

import * as VideoActions from "../actions/video.actions"

@Injectable()
export class VideoEffects {
    private actions$ = inject(Actions)
    private requestService = inject(RequestService)
    private filterService = inject(FilterService)
    private searchService = inject(SearchService)
    private detailService = inject(DetailService)
    private navigationService = inject(NavigationService)

    private searchQuery$: Signal<string> = this.searchService.searchQuery$
    private currentTokenPage$: Signal<string> = this.navigationService.currentTokenPage$

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
                this.searchQuery$().pipe(
                    switchMap((query: string) =>
                        this.currentTokenPage$.pipe(
                            switchMap((pageToken: string) =>
                                this.requestService.search(query, pageToken).pipe(
                                    switchMap((items: Item[]) =>
                                        this.filterService.filter$.pipe(
                                            map(() => this.filterService.sortDataByFilterCriteria(items))
                                        )
                                    ),
                                    map((videos: Item[]) => VideoActions.loadVideosSuccess({ videos })),
                                    catchError((error) => of(VideoActions.loadVideosFailure({ error: error.message })))
                                )
                            )
                        )
                    )
                )
            )
        )
    })

    // loadVideos2$: Observable<Action> = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(VideoActions.loadVideos),
    //         switchMap(() =>
    //             this.requestService.search(query, pageToken).pipe(
    //                 switchMap((items: Item[]) =>
    //                     this.filterService.filter$.pipe(map(() => this.filterService.sortDataByFilterCriteria(items)))
    //                 ),
    //                 map((videos: Item[]) => VideoActions.loadVideosSuccess({ videos })),
    //                 catchError((error) => of(VideoActions.loadVideosFailure({ error: error.message })))
    //             )
    //         )
    //     )
    // })
}

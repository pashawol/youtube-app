import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { concatLatestFrom } from "@ngrx/operators"
import { Action, Store } from "@ngrx/store"
import { Observable, of } from "rxjs"
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators"

import { FavoritesService } from "../../services/favorites.service"
import { loadFavoritesDataFailure, loadFavoritesDataSuccess } from "../actions/favorites.actions"
import * as FavoritesActions from "../actions/favorites.actions"
import { selectFavoritesIds } from "../selectors/favorites.selectors"

@Injectable()
export class FavoritesEffects {
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private favoritesService: FavoritesService,
        private store: Store
    ) {}

    loadFavoritesData$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(FavoritesActions.loadFavoritesData),
            withLatestFrom(this.store.select(selectFavoritesIds)),
            // concatLatestFrom(() => this.store.select(selectFavoritesIds)),
            mergeMap(([_, ids]) =>
                this.favoritesService.getFavorites(ids).pipe(
                    map((favoritesData) => loadFavoritesDataSuccess({ favoritesData })),
                    catchError((error) => of(loadFavoritesDataFailure({ error })))
                )
            )
        )
    })
}

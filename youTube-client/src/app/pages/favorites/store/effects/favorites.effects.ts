import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { concatLatestFrom } from "@ngrx/operators"
import { Action, Store } from "@ngrx/store"
import { Observable, of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"

import { FavoritesService } from "../../services/favorites.service"
import * as FavoritesActions from "../actions/favorites.actions"
import { selectFavoritesIds } from "../selectors/favorites.selectors"

@Injectable()
export class FavoritesEffects {
    constructor(
        private actions$: Actions,
        private favoritesService: FavoritesService,
        private store: Store
    ) {}

    loadFavoritesData$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(FavoritesActions.loadFavoritesData),
            concatLatestFrom(() => this.store.select(selectFavoritesIds)),
            // concatLatestFrom(() => this.store.select(selectFavoritesIds)),
            switchMap(([_, ids]) =>
                this.favoritesService.getFavorites(ids).pipe(
                    map((favoritesData) => FavoritesActions.loadFavoritesDataSuccess({ favoritesData })),
                    catchError((error) => of(FavoritesActions.loadFavoritesDataFailure({ error })))
                )
            )
        )
    })
}

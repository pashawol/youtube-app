import { TestBed } from "@angular/core/testing"
import { Actions } from "@ngrx/effects"
import { provideMockActions } from "@ngrx/effects/testing"
import { of } from "rxjs"

import { FavoritesService } from "../../../services/favorites.service"
import * as FavoritesActions from "../../actions/favorites.actions"
import { FavoritesEffects } from "../favorites.effects"
import { mockFavorite } from "./mocks/favorites.mock"

describe("Favorites Effects", () => {
    let actions$: Actions
    let effects$: FavoritesEffects

    const mockFavoritesService = {
        getFavorites: jest.fn().mockReturnValue(of([]))
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FavoritesEffects,
                provideMockActions(() => actions$),
                { provide: FavoritesService, useValue: mockFavoritesService }
            ]
        })

        effects$ = TestBed.inject(FavoritesEffects)
    })

    it("should fetch favorites data", (done) => {
        const action = FavoritesActions.loadFavoritesData()
        const completion = FavoritesActions.loadFavoritesDataSuccess({ favoritesData: [] })
        actions$ = of(action)

        effects$.loadFavoritesData$.subscribe((result) => {
            expect(result).toEqual(completion)
            done()
        })
    })
})

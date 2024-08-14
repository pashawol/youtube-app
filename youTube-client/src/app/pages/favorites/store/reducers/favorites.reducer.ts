import { createReducer, on } from "@ngrx/store"

import * as FavoritesActions from "../actions/favorites.actions"
import { FavoritesState, initialState } from "../favorites.state"

export const favoritesReducer = createReducer(
    initialState,
    on(FavoritesActions.loadFavoritesSuccess, (state, { favorites }): FavoritesState => {
        return {
            ...state,
            favoriteList: favorites
        }
    }),
    on(FavoritesActions.toggleFavorite, (state, { id }): FavoritesState => {
        return {
            ...state,
            favoriteList: state.favoriteList.includes(id)
                ? state.favoriteList.filter((favorite) => favorite !== id)
                : [...state.favoriteList, id],
            favoritesData: state.favoritesData.filter((item) => item.id !== id)
        }
    }),
    on(FavoritesActions.loadFavoritesDataSuccess, (state, { favoritesData }): FavoritesState => {
        return {
            ...state,
            favoritesData
        }
    }),
    on(FavoritesActions.loadFavoritesDataFailure, (state, { error }): FavoritesState => {
        return {
            ...state,
            error
        }
    })
)

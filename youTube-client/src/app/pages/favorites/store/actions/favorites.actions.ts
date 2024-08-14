import { Item } from "@app/shared/models/response.model"
import { createAction, props } from "@ngrx/store"

export const loadFavorites = createAction("[Favorites] Load Favorites")
export const loadFavoritesSuccess = createAction("[Favorites] Load Favorites Success", props<{ favorites: string[] }>())
export const loadFavoritesFailure = createAction(
    "[Favorites] Load Favorites Failure",
    props<{ error: string | null }>()
)

export const addFavorite = createAction("[Favorites] Add Favorite", props<{ id: string }>())
export const removeFavorite = createAction("[Favorites] Remove Favorite", props<{ id: string }>())

export const loadFavoritesData = createAction("[Favorites] Load Favorites Data")
export const loadFavoritesDataSuccess = createAction(
    "[Favorites] Load Favorites Data Success",
    props<{ favoritesData: Item[] }>()
)
export const loadFavoritesDataFailure = createAction(
    "[Favorites] Load Favorites Data Failure",
    props<{ error: string | null }>()
)

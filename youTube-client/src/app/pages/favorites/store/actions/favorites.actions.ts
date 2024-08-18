import { Item } from "@app/shared/models/response.model"
import { createAction, props } from "@ngrx/store"

export const loadFavorites = createAction("[Favorites] Load Favorites")
export const loadFavoritesSuccess = createAction("[Favorites] Load Favorites Success", props<{ favorites: string[] }>())

export const toggleFavorite = createAction("[Favorite] Toggle Favorite", props<{ id: string }>())

export const loadFavoritesData = createAction("[Favorites] Load Favorites Data")
export const loadFavoritesDataSuccess = createAction(
    "[Favorites] Load Favorites Data Success",
    props<{ favoritesData: Item[] }>()
)
export const loadFavoritesDataFailure = createAction(
    "[Favorites] Load Favorites Data Failure",
    props<{ error: string | null }>()
)

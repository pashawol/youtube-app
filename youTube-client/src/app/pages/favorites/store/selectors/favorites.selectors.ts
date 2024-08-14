import { createFeatureSelector, createSelector } from "@ngrx/store"

import { FavoritesState } from "../favorites.state"
import { favoritesFeatureKey } from "../store.constants"

export const selectFavoriteListFeature = createFeatureSelector<FavoritesState>(favoritesFeatureKey)

export const selectFavoritesIds = createSelector(selectFavoriteListFeature, (state) => state.favoriteList)

export const selectFavoritesData = createSelector(selectFavoriteListFeature, (state) => state.favoritesData)

export const selectIsFavorite = (id: string) =>
    createSelector(selectFavoritesIds, (favoriteList) => favoriteList.includes(id))

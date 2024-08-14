import { Item } from "@app/shared/models/response.model"

export interface FavoritesState {
    favoriteList: string[] | null
    favoritesData: Item[] | null
    error: string | null
}

export const initialState: FavoritesState = {
    favoriteList: ["7PxxZWrlRTc", "Dh-k6EcwPmI"],
    favoritesData: [],
    error: null
}

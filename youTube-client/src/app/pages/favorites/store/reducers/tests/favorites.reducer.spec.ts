import { Item } from "@app/shared/models/response.model"

import * as FavoritesActions from "../../actions/favorites.actions"
import { initialState } from "../../favorites.state"
import { favoritesReducer } from "../favorites.reducer"

const newVideo: Item = {
    kind: "kind",
    etag: "etag",
    id: "id",
    snippet: {
        publishedAt: "publishedAt",
        channelId: "channelId",
        title: "title",
        description: "description",
        thumbnails: {
            default: {
                url: "url",
                width: 0,
                height: 0
            },
            medium: {
                url: "url",
                width: 0,
                height: 0
            },
            high: {
                url: "url",
                width: 0,
                height: 0
            }
        },
        channelTitle: "channelTitle",
        tags: ["tags"],
        categoryId: "categoryId",
        liveBroadcastContent: "liveBroadcastContent",
        localized: {
            title: "title",
            description: "description"
        },
        defaultAudioLanguage: "defaultAudioLanguage",
        defaultLanguage: "defaultLanguage"
    },
    statistics: {
        viewCount: "viewCount",
        likeCount: "likeCount",
        dislikeCount: "dislikeCount",
        favoriteCount: "favoriteCount",
        commentCount: "commentCount"
    }
}
describe("favoritesReducer", () => {
    it("should return the initial state", () => {
        const state = favoritesReducer(undefined, { type: "@@INIT" })
        expect(state).toBe(initialState)
    })

    it("should handle loadFavoritesDataSuccess action", () => {
        const action = FavoritesActions.loadFavoritesDataSuccess({ favoritesData: [newVideo] })
        const state = favoritesReducer(initialState, action)

        expect(state).toEqual({ ...initialState, favoritesData: [newVideo] })
    })

    it("should handle toggleFavorite action", () => {
        const action = FavoritesActions.toggleFavorite({ id: newVideo.id })
        const state = favoritesReducer({ ...initialState, favoriteList: [newVideo.id] }, action)

        expect(state).toEqual({ ...initialState, favoriteList: [], favoritesData: [] })
    })
})

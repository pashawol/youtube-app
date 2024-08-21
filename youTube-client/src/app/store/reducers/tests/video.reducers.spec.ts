import { Item } from "@app/shared/models/response.model"

import * as VideoActions from "../../actions/video.actions"
import { initialState } from "../../videos.state"
import { videoReducer } from "../video.reducer"

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
describe("videoReducer", () => {
    it("should return the initial state", () => {
        const state = videoReducer(undefined, { type: "@@INIT" })
        expect(state).toMatchSnapshot()
    })

    it("should handle createVideo action", () => {
        const action = VideoActions.createVideo({ video: newVideo })
        const state = videoReducer(initialState, action)

        expect(state.localVideos).toMatchSnapshot()
    })

    it("should handle loadVideosSuccess action", () => {
        const action = VideoActions.loadVideosSuccess({ videos: [newVideo] })
        const state = videoReducer(initialState, action)

        expect(state.videos).toMatchSnapshot()
    })

    it("should handle getVideoByIdSuccess action", () => {
        const action = VideoActions.getVideoByIdSuccess({ video: newVideo })
        const state = videoReducer(initialState, action)

        expect(state.video).toMatchSnapshot()
    })
})

import { createReducer, on } from "@ngrx/store"

import * as VideoActions from "../actions/video.actions"
import { initialState, VideoState } from "../videos.state"

export const videoReducer = createReducer(
    initialState,
    on(VideoActions.createVideo, (state, { video }): VideoState => {
        return {
            ...state,
            localVideos: [...state.localVideos, video]
        }
    }),
    on(VideoActions.loadVideosSuccess, (state, { videos }): VideoState => {
        return {
            ...state,
            videos
        }
    }),
    on(VideoActions.getVideoByIdSuccess, (state, { video }): VideoState => {
        return {
            ...state,
            video
        }
    }),
    on(VideoActions.deleteVideo, (state, { id }): VideoState => {
        return {
            ...state,
            videos: state.videos.filter((video) => video.id !== id)
        }
    })
)

import { createReducer, on } from "@ngrx/store"
import { Item } from "@shared/models/response.model"

import * as VideoActions from "../actions/video.actions"

export interface VideoState {
    videos: Item[]
    localVideos: Item[]
    video: Item | null
}

export const initialState: VideoState = {
    videos: [],
    localVideos: [],
    video: null
}

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
    on(VideoActions.getVideoByIdSuccess, (state): VideoState => {
        return {
            ...state
        }
    }),
    on(VideoActions.deleteVideo, (state, { id }): VideoState => {
        return {
            ...state,
            videos: state.videos.filter((video) => video.id !== id)
        }
    })
)

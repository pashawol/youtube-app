import { createFeatureSelector, createSelector } from "@ngrx/store"

import { videosFeatureKey } from "../store.constants"
import { VideoState } from "../videos.state"

export const selectVideoFeature = createFeatureSelector<VideoState>(videosFeatureKey)

export const selectVideos = createSelector(selectVideoFeature, (state) => state.videos)

export const selectLocalVideos = createSelector(selectVideoFeature, (state) => state.localVideos)

export const selectVideo = createSelector(selectVideoFeature, (state) => state.video)

export const selectLocalVideoById = (id: string) =>
    createSelector(selectLocalVideos, (videos) => videos.find((video) => video.id === id) || null)

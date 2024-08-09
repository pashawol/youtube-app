import { createFeatureSelector, createSelector, createSelectorFactory, defaultMemoize } from "@ngrx/store"

import { videosFeatureKey } from "../store.constants"
import { VideoState } from "../videos.state"

export const selectVideoFeature = createFeatureSelector<VideoState>(videosFeatureKey)

export const selectVideos = createSelector(selectVideoFeature, (state) => state.videos)

export const selectLocalVideos = createSelector(selectVideoFeature, (state) => state.localVideos)

export const selectVideo = createSelector(selectVideoFeature, (state) => state.video)

export const selectLocalVideoById = createSelectorFactory(defaultMemoize)((id: string) => {
    return createSelector(selectLocalVideos, (videos) => videos.find((video) => video.id === id))
})

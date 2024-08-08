import { createAction, props } from "@ngrx/store"
import { Item } from "@shared/models/response.model"

export const getVideoById = createAction("[Video] Get Video By Id", props<{ id: string }>())
export const getVideoByIdSuccess = createAction("[Video] Get Video By Id Success", props<{ video: Item }>())
export const getVideoByIdFailure = createAction("[Video] Get Video By Id Failure", props<{ error: any }>())

export const loadVideos = createAction("[Video] Load Videos")
export const loadVideosSuccess = createAction("[Video] Load Videos Success", props<{ videos: Item[] }>())
export const loadVideosFailure = createAction("[Video] Load Videos Failure", props<{ error: any }>())

export const createVideo = createAction("[Video] Create Video", props<{ video: Item }>())
export const deleteVideo = createAction("[Video] Delete Video", props<{ id: string }>())

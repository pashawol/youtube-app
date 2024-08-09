import { Item } from "@app/shared/models/response.model"

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

import { Item } from "@app/shared/models/response.model"

export interface VideoState {
    videos: Item[] | null
    localVideos: Item[] | null
    video: Item | null
    currentPagination: string | null
    error: string | null
}

export const initialState: VideoState = {
    videos: null,
    localVideos: [
        {
            id: "local-obUsyRdkHaM",
            snippet: {
                publishedAt: "08-10-2024",
                title: "New video",
                description: "video",
                thumbnails: {
                    default: {
                        url: "https://media.licdn.com/dms/image/D4E22AQFcylssXyxIAw/feedshare-shrink_800/0/1723378128666?e=1726099200&v=beta&t=MvHvUDQ6kE6SAISk8NooNnRt2Vqw-2KTkbmXZhr9O9o",
                        width: 0,
                        height: 0
                    },
                    medium: {
                        url: "https://media.licdn.com/dms/image/D4E22AQFcylssXyxIAw/feedshare-shrink_800/0/1723378128666?e=1726099200&v=beta&t=MvHvUDQ6kE6SAISk8NooNnRt2Vqw-2KTkbmXZhr9O9o",
                        width: 0,
                        height: 0
                    },
                    high: {
                        url: "https://media.licdn.com/dms/image/D4E22AQFcylssXyxIAw/feedshare-shrink_800/0/1723378128666?e=1726099200&v=beta&t=MvHvUDQ6kE6SAISk8NooNnRt2Vqw-2KTkbmXZhr9O9o",
                        width: 0,
                        height: 0
                    }
                },
                channelTitle: "",
                tags: ["teg", "tag 1", "teg 3"],
                categoryId: "local",
                liveBroadcastContent: "",
                localized: {
                    title: "New video",
                    description: "video"
                },
                defaultAudioLanguage: "",
                defaultLanguage: "",
                channelId: ""
            },
            statistics: {
                viewCount: "0",
                likeCount: "0",
                dislikeCount: "0",
                favoriteCount: "0",
                commentCount: "0"
            },
            kind: "",
            etag: ""
        },
        {
            id: "local-bCBHoHLlMFs",
            snippet: {
                publishedAt: "08-10-2024",
                title: "New video 2",
                description: "video 2",
                thumbnails: {
                    default: {
                        url: "https://media.licdn.com/dms/image/D4E22AQHXYQf4oyYg1Q/feedshare-shrink_800/0/1723389466302?e=1726099200&v=beta&t=-Ml16Qq4KHKI_PdrFO2GdFWa6-SCIkTpgxigCdOfWUg",
                        width: 0,
                        height: 0
                    },
                    medium: {
                        url: "https://media.licdn.com/dms/image/D4E22AQHXYQf4oyYg1Q/feedshare-shrink_800/0/1723389466302?e=1726099200&v=beta&t=-Ml16Qq4KHKI_PdrFO2GdFWa6-SCIkTpgxigCdOfWUg",
                        width: 0,
                        height: 0
                    },
                    high: {
                        url: "https://media.licdn.com/dms/image/D4E22AQHXYQf4oyYg1Q/feedshare-shrink_800/0/1723389466302?e=1726099200&v=beta&t=-Ml16Qq4KHKI_PdrFO2GdFWa6-SCIkTpgxigCdOfWUg",
                        width: 0,
                        height: 0
                    }
                },
                channelTitle: "",
                tags: ["teg", "tag 1", "teg 3"],
                categoryId: "local",
                liveBroadcastContent: "",
                localized: {
                    title: "New video 2",
                    description: "video 2"
                },
                defaultAudioLanguage: "",
                defaultLanguage: "",
                channelId: ""
            },
            statistics: {
                viewCount: "0",
                likeCount: "0",
                dislikeCount: "0",
                favoriteCount: "0",
                commentCount: "0"
            },
            kind: "",
            etag: ""
        }
    ],
    video: null,
    currentPagination: null,
    error: null
}

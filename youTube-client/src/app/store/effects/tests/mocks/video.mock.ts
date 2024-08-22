import { Item } from "@app/shared/models/response.model"

export const mockVideo: Item = {
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

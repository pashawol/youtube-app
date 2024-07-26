export interface SearchResponse {
    kind: string
    etag: string
    pageInfo: PageInfo
    items: Item[]
}

export interface PageInfo {
    totalResults: number
    resultsPerPage: number
}

export interface Item {
    kind: string
    etag: string
    id: IdInterface
    snippet: Snippet
    statistics: Statistics
}

export interface Item2 {
    kind: string
    etag: string
    id: string
    snippet: Snippet
    statistics: Statistics
}

interface IdInterface {
    kind: string
    videoId: string
}

export interface Snippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: Thumbnails
    channelTitle: string
    tags: string[]
    categoryId: string
    liveBroadcastContent: string
    localized: Localized
    defaultAudioLanguage: string
    defaultLanguage?: string
}

export interface Thumbnails {
    default: Thumbnail
    medium: Thumbnail
    high: Thumbnail
}

export interface Thumbnail {
    url: string
    width: number
    height: number
}

export interface Localized {
    title: string
    description: string
}

export interface Statistics {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
}

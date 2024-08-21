import { TestBed } from "@angular/core/testing"
import { Item } from "@app/shared/models/response.model"
import { Actions } from "@ngrx/effects"
import { provideMockActions } from "@ngrx/effects/testing"
import { MockStore, provideMockStore } from "@ngrx/store/testing"
import { of } from "rxjs"

import * as VideoActions from "../../actions/video.actions"
import { VideoEffects } from "../video.effects"

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
class MockVideoService {
    static getVideos() {
        return of(newVideo)
    }
}

describe("Video Effects", () => {
    let store: MockStore
    let actions$: Actions
    let effects$: VideoEffects

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({ initialState: {} }),
                provideMockActions(() => actions$),
                VideoEffects,
                { provide: MockVideoService, useClass: MockVideoService }
            ]
        })

        store = TestBed.inject(MockStore)
        actions$ = TestBed.inject(Actions)
        effects$ = TestBed.inject(VideoEffects)
    })

    it("should fetch videos", (done) => {
        const action = VideoActions.loadVideos()
        const completion = VideoActions.loadVideosSuccess({ videos: [] })

        actions$ = of(action)

        effects$.loadVideos$.subscribe((result) => {
            expect(result).toEqual(completion)
            done()
        })
    })

    it("should fetch video by id", (done) => {
        const action = VideoActions.getVideoById({ id: "local-obUsyRdkHaM" })
        const completion = VideoActions.getVideoByIdSuccess({ video: {} as Item })

        actions$ = of(action)

        effects$.getVideoById$.subscribe((result) => {
            expect(result).toEqual(completion)
            done()
        })
    })
})

import { signal } from "@angular/core"
import { TestBed } from "@angular/core/testing"
import { FilterCriteria } from "@app/core/models/filter.model"
import { FilterService, RequestService, SearchService } from "@app/pages/youtube/pages/search/services"
import { NavigationService } from "@app/shared/services/navigation.service"
import { Actions } from "@ngrx/effects"
import { provideMockActions } from "@ngrx/effects/testing"
import { RequestService as DetailService } from "@pages/youtube/pages/video-details/services/request.service"
import { of } from "rxjs"

import * as VideoActions from "../../actions/video.actions"
import { VideoEffects } from "../video.effects"
import { mockVideo } from "./mocks/video.mock"

describe("Video Effects", () => {
    let actions$: Actions
    let effects$: VideoEffects

    const fakeQuery = "query"
    const fakePageToken = "token"

    const mockRequestService = {
        search: jest.fn().mockReturnValue(of([]))
    }

    const mockFilterService: Partial<FilterService> = {
        sortDataByFilterCriteria: jest.fn().mockReturnValue([]),
        filter$: of({} as FilterCriteria)
    }

    const mockSearchService = {
        searchQuery$: signal(fakeQuery)
    }

    const mockDetailService = {
        fetchData: jest.fn().mockReturnValue(of(mockVideo))
    }

    const mockNavigationService = {
        currentTokenPage$: signal(fakePageToken)
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                VideoEffects,
                provideMockActions(() => actions$),

                { provide: RequestService, useValue: mockRequestService },
                { provide: FilterService, useValue: mockFilterService },
                { provide: SearchService, useValue: mockSearchService },
                { provide: DetailService, useValue: mockDetailService },
                { provide: NavigationService, useValue: mockNavigationService }
            ]
        })

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
        const completion = VideoActions.getVideoByIdSuccess({ video: mockVideo })

        actions$ = of(action)

        effects$.getVideoById$.subscribe((result) => {
            expect(result).toEqual(completion)
            done()
        })
    })
})

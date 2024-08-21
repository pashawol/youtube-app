import { Component, Output } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { VideoDetailsComponent } from "./video-details.component"

const mockVideo = {
    id: "1",
    title: "title",
    description: "description",
    publishedAt: "publishedAt",
    thumbnail: "thumbnail",
    videoId: "videoId"
}
@Component({
    selector: "app-video-details",
    template: ""
})
class MockVideoDetailsComponent {
    @Output() video$ = mockVideo
}

describe("VideoDetailsComponent", () => {
    let component: VideoDetailsComponent
    let fixture: ComponentFixture<VideoDetailsComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VideoDetailsComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(VideoDetailsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})

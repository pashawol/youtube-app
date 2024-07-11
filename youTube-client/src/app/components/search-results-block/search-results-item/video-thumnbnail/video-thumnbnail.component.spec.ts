import { ComponentFixture, TestBed } from "@angular/core/testing"

import { VideoThumnbnailComponent } from "./video-thumnbnail.component"

describe("VideoThumnbnailComponent", () => {
    let component: VideoThumnbnailComponent
    let fixture: ComponentFixture<VideoThumnbnailComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VideoThumnbnailComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(VideoThumnbnailComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})

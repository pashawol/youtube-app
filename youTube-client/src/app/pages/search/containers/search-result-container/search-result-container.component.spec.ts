import { ComponentFixture, TestBed } from "@angular/core/testing"

import { SearchResultContainerComponent } from "./search-result-container.component"

describe("SearchResultComponent", () => {
    let component: SearchResultContainerComponent
    let fixture: ComponentFixture<SearchResultContainerComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchResultContainerComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(SearchResultContainerComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})

import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonsForSortComponent } from "./buttons-for-sort.component"

describe("ButtonsForSortComponent", () => {
    let component: ButtonsForSortComponent
    let fixture: ComponentFixture<ButtonsForSortComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonsForSortComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(ButtonsForSortComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})

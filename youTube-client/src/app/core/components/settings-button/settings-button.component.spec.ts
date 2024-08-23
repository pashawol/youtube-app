import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { FilterService } from "@app/pages/youtube/pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components"

import { SettingsButtonComponent } from "./settings-button.component"

describe("SettingsButtonComponent", () => {
    let component: SettingsButtonComponent
    let fixture: ComponentFixture<SettingsButtonComponent>

    const mockFilterService = {
        toggleFilter: jest.fn()
    }
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SettingsButtonComponent, ButtonComponent],
            providers: [{ provide: FilterService, useValue: mockFilterService }]
        }).compileComponents()

        fixture = TestBed.createComponent(SettingsButtonComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })

    it("should toggle showFilter and call filterService.toggleFilter on button click", () => {
        const button = fixture.debugElement.query(By.css("button"))
        button.triggerEventHandler("click", null)

        expect(component.showFilter()).toBeTruthy()
        expect(mockFilterService.toggleFilter).toHaveBeenCalledWith(true)

        button.triggerEventHandler("click", null)

        expect(component.showFilter()).toBeFalsy()
        expect(mockFilterService.toggleFilter).toHaveBeenCalledWith(false)
    })
})

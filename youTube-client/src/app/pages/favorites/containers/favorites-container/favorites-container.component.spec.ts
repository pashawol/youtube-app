import { ComponentFixture, TestBed } from "@angular/core/testing"

import { FavoritesContainerComponent } from "./favorites-container.component"

describe("FavoritesContainerComponent", () => {
    let component: FavoritesContainerComponent
    let fixture: ComponentFixture<FavoritesContainerComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavoritesContainerComponent],
            providers: [
                // Add the _Store provider here
                { provide: _Store, useValue: {} }
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(FavoritesContainerComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeDefined()
    })
})

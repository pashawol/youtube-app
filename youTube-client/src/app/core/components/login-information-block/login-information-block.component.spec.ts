import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from "@angular/router"

import { LoginInformationBlockComponent } from "./login-information-block.component"

describe("LoginInformationBlockComponent", () => {
    let component: LoginInformationBlockComponent
    let fixture: ComponentFixture<LoginInformationBlockComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoginInformationBlockComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {}
                }
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(LoginInformationBlockComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})

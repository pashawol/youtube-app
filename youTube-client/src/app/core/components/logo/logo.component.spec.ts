import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from "@angular/router"

import { LogoComponent } from "./logo.component"

describe("LogoComponent", () => {
    let component: LogoComponent
    let fixture: ComponentFixture<LogoComponent>
    let link: HTMLAnchorElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LogoComponent],
            providers: [{ provide: ActivatedRoute, useValue: {} }]
        }).compileComponents()

        fixture = TestBed.createComponent(LogoComponent)
        component = fixture.componentInstance
        link = fixture.nativeElement.querySelector("a")
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(link.classList).toContain("logo")
    })
})

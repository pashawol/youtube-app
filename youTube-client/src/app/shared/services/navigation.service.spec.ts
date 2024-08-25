import { TestBed } from "@angular/core/testing"

import { NavigationService } from "./navigation.service"

describe("NavigationService", () => {
    let service: NavigationService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(NavigationService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })

    it("should have default tokenPageQuery$", () => {
        expect(service.tokenPageQuery$()).toEqual({ prev: "", next: "" })
    })

    it("should have default currentTokenPage$", () => {
        expect(service.currentTokenPage$()).toBe("")
    })

    it("should set currentTokenPage$", () => {
        service.setTokenPage("newToken")
        expect(service.currentTokenPage$()).toBe("newToken")
    })
})

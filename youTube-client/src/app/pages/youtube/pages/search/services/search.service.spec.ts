import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"

import { SearchService } from "./search.service"

describe("SearchService", () => {
    let service: SearchService

    const mockHttpClient = {
        get: jest.fn().mockReturnValue({ pipe: jest.fn() })
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: mockHttpClient
                }
            ]
        })
        service = TestBed.inject(SearchService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })
    it("should have default searchActivated$ as false", () => {
        expect(service.searchActivated$()).toBe(false)
    })

    it("should set search query", () => {
        const query = "test query"
        service.setQuery(query)
        expect(service.searchQuery$()).toBe(query)
    })
})

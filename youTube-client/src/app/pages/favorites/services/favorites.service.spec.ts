import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"

import { FavoritesService } from "./favorites.service"

describe("FavoritesService", () => {
    let service: FavoritesService

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
        service = TestBed.inject(FavoritesService)
    })

    it("should be created", () => {
        service.getFavorites([])
        expect(service).toBeTruthy()
    })
})

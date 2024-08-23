import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"

import { RequestService } from "./request.service"

describe("RequestService", () => {
    let service: RequestService

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
        service = TestBed.inject(RequestService)
    })

    it("should be created", () => {
        service.fetchData("id")
        expect(mockHttpClient.get).toHaveBeenCalled()
    })
})

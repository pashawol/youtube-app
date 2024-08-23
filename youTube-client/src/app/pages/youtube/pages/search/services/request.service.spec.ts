import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { Item } from "@app/shared/models/response.model"
import { of } from "rxjs"

import { RequestService } from "./request.service"

describe("RequestService", () => {
    let service: RequestService

    const mockResponse = {
        items: [] as Item[]
    }

    const mockHttpClient = {
        get: jest.fn().mockReturnValue(of(mockResponse))
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
        service.search("query")
        expect(mockHttpClient.get).toHaveBeenCalled()
    })
})

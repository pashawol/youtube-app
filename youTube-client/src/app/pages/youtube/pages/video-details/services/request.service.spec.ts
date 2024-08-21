import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"

import { RequestService } from "./request.service"

describe("RequestService", () => {
    let service: RequestService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RequestService, HttpClient]
        })
        service = TestBed.inject(RequestService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })
})

import { TestBed } from "@angular/core/testing"
import { FilterCriteria } from "@app/core/models/filter.model"

import { FilterService } from "./filter.service"

describe("FilterService", () => {
    let service: FilterService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FilterService]
        })

        service = TestBed.inject(FilterService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })

    it("should have default filter criteria", (done) => {
        service.filter$.subscribe((criteria) => {
            expect(criteria).toEqual({
                date: "",
                count: "",
                searchText: ""
            })
            done()
        })
    })

    it("should update filter criteria", (done) => {
        const newCriteria: FilterCriteria = {
            date: "2023-10-01",
            count: "10",
            searchText: "test"
        }

        service.filterSubject.next(newCriteria)

        service.filter$.subscribe((criteria) => {
            expect(criteria).toEqual(newCriteria)
            done()
        })
    })
})

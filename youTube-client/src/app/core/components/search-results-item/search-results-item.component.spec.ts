import { ComponentFixture, TestBed } from "@angular/core/testing"
import { SearchResultsItemComponent } from "./search-results-item.component"
import { provideMockStore, MockStore } from "@ngrx/store/testing"

describe("SearchResultsItemComponent", () => {
    let component: SearchResultsItemComponent
    let fixture: ComponentFixture<SearchResultsItemComponent>
    let store: MockStore
    let pCard: HTMLElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchResultsItemComponent],
            providers: [provideMockStore({})]
        }).compileComponents()

        fixture = TestBed.createComponent(SearchResultsItemComponent)
        component = fixture.componentInstance
        store = TestBed.inject(MockStore)
        pCard = fixture.nativeElement.querySelector("p-card")
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})

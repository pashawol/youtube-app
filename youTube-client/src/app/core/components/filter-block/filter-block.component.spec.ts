import { CommonModule } from "@angular/common"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { FilterService } from "@app/pages/youtube/pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components"
import { InputTextModule } from "primeng/inputtext"

import { FilterBlockComponent } from "./filter-block.component"

describe("FilterBlockComponent", () => {
    let component: FilterBlockComponent
    let fixture: ComponentFixture<FilterBlockComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FilterBlockComponent, CommonModule, ButtonComponent, FormsModule, InputTextModule],
            providers: [
                {
                    provide: FilterService,
                    useValue: {
                        setFilterCriteria: jest.fn()
                    }
                }
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(FilterBlockComponent)
        component = fixture.componentInstance
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })

    it("should initialize with default filter criteria", () => {
        expect(component.filterCriteria).toEqual({ date: "", count: "", searchText: "" })
    })
})

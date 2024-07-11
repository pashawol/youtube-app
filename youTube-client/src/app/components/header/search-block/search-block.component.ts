import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"

import { ButtonComponent } from "../../shared/button/button.component"

import { SearchService } from "../../../services/search.service"

@Component({
    selector: "app-search-block",
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonComponent],
    templateUrl: "./search-block.component.html",
    styleUrl: "./search-block.component.scss"
})
export class SearchBlockComponent {
    constructor(private searchService: SearchService) {}
    onSubmit() {
        this.searchService.activateSearch(true)
    }
}

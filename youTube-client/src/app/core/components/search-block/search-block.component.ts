import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { SearchService } from "@pages/search/services/search.service"
import { ButtonComponent } from "@shared/components/button/button.component"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"

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

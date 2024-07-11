import { Component } from "@angular/core"

import { FilterService } from "../../../services/filter.service"
import { ButtonComponent } from "../../shared/button/button.component"

@Component({
    selector: "app-settings-button",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./settings-button.component.html",
    styleUrl: "./settings-button.component.scss"
})
export class SettingsButtonComponent {
    showFilter = false
    constructor(private filterService: FilterService) {}

    onButtonClick() {
        this.showFilter = !this.showFilter
        this.filterService.toggleFilter(this.showFilter)
    }
}

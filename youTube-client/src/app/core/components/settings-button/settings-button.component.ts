import { Component, signal } from "@angular/core"
import { FilterService } from "@app/pages/youtube/pages/search/services/filter.service"
import { ButtonComponent } from "@shared/components"

@Component({
    selector: "app-settings-button",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./settings-button.component.html",
    styleUrl: "./settings-button.component.scss"
})
export class SettingsButtonComponent {
    showFilter = signal(false)
    constructor(private filterService: FilterService) {}

    onButtonClick() {
        this.showFilter.set(!this.showFilter())
        this.filterService.toggleFilter(this.showFilter())
    }
}

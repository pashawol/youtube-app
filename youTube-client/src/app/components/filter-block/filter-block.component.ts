import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { InputTextModule } from "primeng/inputtext"

import { ButtonComponent } from "../shared/button/button.component"

@Component({
    selector: "app-filter-block",
    standalone: true,
    imports: [ButtonComponent, FormsModule, InputTextModule],
    templateUrl: "./filter-block.component.html",
    styleUrl: "./filter-block.component.scss"
})
export class FilterBlockComponent {
    value!: string
}

import { Component } from "@angular/core"
import { ButtonComponent } from "../shared/button/button.component"
import { InputTextModule } from "primeng/inputtext"
import { FormsModule } from "@angular/forms"

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

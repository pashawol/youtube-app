import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"

import { ButtonComponent } from "../components/shared/button/button.component"

@Component({
    selector: "app-search",
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonComponent],
    templateUrl: "./search.component.html",
    styleUrl: "./search.component.scss"
})
export class SearchComponent {}

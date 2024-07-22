import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ButtonModule } from "primeng/button"
import { RippleModule } from "primeng/ripple"

@Component({
    selector: "app-link",
    standalone: true,
    imports: [ButtonModule, RippleModule, CommonModule, RouterModule],
    templateUrl: "./link.component.html",
    styleUrl: "./link.component.scss"
})
export class LinkComponent {
    @Input() classList!: string
    @Input() link!: string | string[]
    @Input() style!: string
}

import { Component, Input } from "@angular/core"
import { ButtonDirective, ButtonModule } from "primeng/button"
import { RippleModule } from "primeng/ripple"

@Component({
    selector: "app-button",
    standalone: true,
    imports: [ButtonModule, RippleModule],
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.scss"
})
export class ButtonComponent {
    @Input() icon!: string
    @Input() type: string = "button"
    @Input() label!: string
    @Input() size: ButtonDirective["size"]
    @Input() disabled = false
    @Input() class!: string
    @Input() style!: string
    @Input() severity: ButtonDirective["severity"]
}

import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ButtonDirective, ButtonModule } from "primeng/button"
import { RippleModule } from "primeng/ripple"

@Component({
    selector: "app-button",
    standalone: true,
    imports: [ButtonModule, RippleModule, CommonModule, RouterModule],
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.scss"
})
export class ButtonComponent {
    @Input() icon!: string
    @Input() type: string = "button"
    @Input() label!: string
    @Input() disabled = false
    @Input() classList!: string
    @Input() severity: ButtonDirective["severity"]
    @Input() outlined: boolean = false
    @Input() buttonRouterLink!: string

    @Output() buttonClick = new EventEmitter<void>()

    onClick() {
        this.buttonClick.emit()
    }
}

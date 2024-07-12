import { Component, EventEmitter, Input, Output } from "@angular/core"
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
    @Input() disabled = false
    @Input() classList!: string
    @Input() severity: ButtonDirective["severity"]
    @Input() outlined: boolean = false

    @Output() clicked = new EventEmitter<void>()

    onClick() {
        this.clicked.emit()
    }
}

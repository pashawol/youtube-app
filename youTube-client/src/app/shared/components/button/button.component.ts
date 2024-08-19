import { CommonModule } from "@angular/common"
import { Component, input, model, output } from "@angular/core"
import { ButtonDirective, ButtonModule } from "primeng/button"
import { RippleModule } from "primeng/ripple"

@Component({
    selector: "app-button",
    standalone: true,
    imports: [ButtonModule, RippleModule, CommonModule],
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.scss"
})
export class ButtonComponent {
    icon = input<string>()
    label = input<string>()
    type = input<string>("button")
    disabled = model<boolean>()
    classList = input<string>()
    style = input<string>()
    severity = input<ButtonDirective["severity"]>("primary")
    outlined = input<boolean>()

    buttonClick = output()

    onClick() {
        this.buttonClick.emit()
    }
}

import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { AbstractControl } from "@angular/forms"
import { Error } from "@app/shared/models/error.model"

@Component({
    selector: "app-invalid-text",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./invalid-text.component.html",
    styleUrl: "./invalid-text.component.scss"
})
export class InvalidTextComponent {
    @Input() field!: AbstractControl
    @Input() errors!: Error[]
}

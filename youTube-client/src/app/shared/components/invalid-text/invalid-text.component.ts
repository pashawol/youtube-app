import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { AbstractControl } from "@angular/forms"
import { FormError } from "@app/shared/models/error.model"

@Component({
    selector: "app-invalid-text",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./invalid-text.component.html",
    styleUrl: "./invalid-text.component.scss"
})
export class InvalidTextComponent {
    @Input() field!: AbstractControl
    @Input({ transform: (errors: FormError[]) => new Map(errors.map((error: FormError) => [error.name, error.text])) })
    errors: Map<string, string>
}

import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Error } from "@app/shared/models/error.model"
import { InputTextModule } from "primeng/inputtext"

@Component({
    selector: "app-input",
    standalone: true,
    imports: [CommonModule, InputTextModule, ReactiveFormsModule],
    templateUrl: "./input.component.html",
    styleUrl: "./input.component.scss"
})
export class InputComponent {
    @Input() type: string = "text"
    @Input() label!: string
    @Input() disabled = false
    @Input() classList!: string
    @Input() style!: string
    @Input() required: boolean = true
    @Input() name!: string

    @Input() formName!: FormGroup
    @Input() errorsCustom!: Error[]
    @Input() customAttributes: { key: string; value: string }[]
}

import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms"
import { InputTextModule } from "primeng/inputtext"

@Component({
    selector: "app-input",
    standalone: true,
    imports: [CommonModule, InputTextModule, ReactiveFormsModule],
    templateUrl: "./input.component.html",
    styleUrl: "./input.component.scss"
})
export class InputComponent implements OnInit {
    @Input() type: string = "text"
    @Input() placeholder!: string
    @Input() disabled = false
    @Input() classList!: string
    @Input() style!: string
    @Input() required: boolean = true
    @Input() name!: string

    @Input() controlName!: string

    formGroup!: FormGroup

    constructor(private readonly formGroupDirective: FormGroupDirective) {}

    get control() {
        return this.formGroup?.get(this.controlName)
    }

    ngOnInit() {
        this.formGroup = this.formGroupDirective.control
    }
}

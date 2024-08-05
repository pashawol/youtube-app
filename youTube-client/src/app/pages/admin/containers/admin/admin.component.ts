import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators
} from "@angular/forms"
import { ButtonComponent, InputComponent } from "@app/shared/components"
import { InvalidTextComponent } from "@app/shared/components/invalid-text/invalid-text.component"
import { dateValidator } from "@app/shared/validations/validation-date"
// import { CustomValidateDirective } from "@shared/directives/custom-validate.directive"
import { InputTextModule } from "primeng/inputtext"

import { AdminFormErrors } from "../../constants/error.constants"

@Component({
    selector: "app-admin",
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonComponent,
        InputComponent,
        CommonModule,
        InvalidTextComponent
    ],
    templateUrl: "./admin.component.html",
    styleUrl: "./admin.component.scss"
})
export class AdminComponent implements OnInit {
    adminForm: FormGroup

    readonly errors = AdminFormErrors

    readonly INPUTS = [
        { placeholder: "Title", formControlName: "title", type: "text", errors: this.errors.title },
        { placeholder: "Description", formControlName: "description", type: "text", errors: this.errors.description },
        { placeholder: "Image", formControlName: "img", type: "text", errors: this.errors.img },
        { placeholder: "Video", formControlName: "video", type: "text", errors: this.errors.video },
        {
            placeholder: "Creation Date",
            formControlName: "creationDate",
            type: "text",
            errors: this.errors.creationDate
        }
    ]

    constructor(
        private fb: FormBuilder
        // private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.adminForm = this.fb.group({
            title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            description: ["", [Validators.maxLength(255)]],
            img: ["", [Validators.required]],
            video: ["", [Validators.required]],
            creationDate: [
                "",
                [Validators.required, Validators.minLength(10), Validators.maxLength(10), dateValidator()]
            ],
            tags: new FormArray([AdminComponent.createTag()])
        })
    }

    get tags(): FormArray {
        return this.adminForm.get("tags") as FormArray
    }

    static createTag() {
        return new FormGroup({
            tag: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
        })
    }
    get isTagsLength() {
        return this.tags.length < 5
    }

    removeTag(index: number): void {
        this.tags.removeAt(index)
    }
    addTag(): void {
        this.tags.push(AdminComponent.createTag())
    }

    onSubmit() {
        return this.adminForm.valid
    }

    get disableReset() {
        return this.adminForm.pristine
    }
    resetForm() {
        this.adminForm.reset()
        this.tags.clear()
        this.tags.push(AdminComponent.createTag())
    }
}

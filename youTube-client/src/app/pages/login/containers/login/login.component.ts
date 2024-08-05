import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"
import { LoginService } from "@app/pages/login/services/login.service"
import { ButtonComponent, InputComponent } from "@app/shared/components"
import { InvalidTextComponent } from "@app/shared/components/invalid-text/invalid-text.component"
import { CustomValidateDirective } from "@shared/directives/custom-validate.directive"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"

import { LoginFormErrors } from "../../constants/error.constants"

@Component({
    selector: "app-login",
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        ButtonComponent,
        CommonModule,
        InvalidTextComponent,
        InputComponent
    ],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss"
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup

    readonly errors = LoginFormErrors

    readonly INPUTS = [
        { placeholder: "Email", formControlName: "username", type: "email", errors: this.errors.email },
        { placeholder: "Password", formControlName: "password", type: "password", errors: this.errors.password }
    ]

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ["", [Validators.required, Validators.email]],
            password: [
                "",
                [
                    Validators.required,
                    Validators.minLength(8),
                    CustomValidateDirective.passwordContainsUppercase,
                    CustomValidateDirective.passwordContainsLowercase,
                    CustomValidateDirective.passwordContainsNumber,
                    CustomValidateDirective.passwordContainsLetter,
                    CustomValidateDirective.passwordContainsSpecialCharacter
                ]
            ]
        })
    }

    onSubmit() {
        if (this.loginForm.valid) {
            // Handle form submission
            console.log(this.loginForm.value)

            this.loginService.login(this.loginForm.value)
        } else {
            // Handle form errors
            console.log("Form is invalid")
        }
    }
}

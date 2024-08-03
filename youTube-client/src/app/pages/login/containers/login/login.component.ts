import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"
import { LoginService } from "@app/pages/login/services/login.service"
import { ButtonComponent } from "@app/shared/components"
import { InvalidTextComponent } from "@app/shared/components/invalid-text/invalid-text.component"
import { CustomValidateDirective } from "@shared/directives/custom-validate.directive"
import { InputGroupModule } from "primeng/inputgroup"
import { InputGroupAddonModule } from "primeng/inputgroupaddon"
import { InputTextModule } from "primeng/inputtext"
import { Password } from "primeng/password"

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
        InvalidTextComponent
    ],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss"
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup

    readonly ERRORS = {
        email: [
            { name: "required", text: "Please enter a login email" },
            { name: "email", text: "The login email is invalid" }
        ],
        password: [
            { name: "required", text: "Please enter a password" },
            { name: "minlength", text: "The password is too short" },
            { name: "noUppercase", text: "Password must be a mixture of both uppercase and lowercase letters" },
            { name: "noLowercase", text: "Password must be a mixture of both uppercase and lowercase letters" },
            { name: "noNumber", text: "Password must be a mixture of letters and numbers" },
            { name: "noLetter", text: "Password must be a mixture of letters and numbers" },
            {
                name: "noSpecialCharacter",
                text: "Password must be inclusion of at least one special character, e.g., !  &#64; # ?"
            }
        ]
    }

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

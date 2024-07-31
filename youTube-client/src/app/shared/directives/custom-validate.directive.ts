import { Directive } from "@angular/core"
import { AbstractControl, ValidationErrors } from "@angular/forms"

@Directive({
    selector: "[appCustomValidate]",
    standalone: true
})
export class CustomValidateDirective {
    static passwordContainsUppercase(control: AbstractControl): ValidationErrors | null {
        const hasUppercase = /[A-Z]/.test(control.value)
        return hasUppercase ? null : { noUppercase: true }
    }

    static passwordContainsLowercase(control: AbstractControl): ValidationErrors | null {
        const hasLowercase = /[a-z]/.test(control.value)
        return hasLowercase ? null : { noLowercase: true }
    }

    static passwordContainsNumber(control: AbstractControl): ValidationErrors | null {
        const hasNumber = /\d/.test(control.value)
        return hasNumber ? null : { noNumber: true }
    }

    static passwordContainsLetter(control: AbstractControl): ValidationErrors | null {
        const hasLetter = /[a-zA-Z]/.test(control.value)
        return hasLetter ? null : { noLetter: true }
    }

    static passwordContainsSpecialCharacter(control: AbstractControl): ValidationErrors | null {
        const hasSpecialCharacter = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]+/.test(control.value)
        return hasSpecialCharacter ? null : { noSpecialCharacter: true }
    }
}

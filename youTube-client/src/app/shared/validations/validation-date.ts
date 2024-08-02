import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const date = new Date(control.value.toLocaleString())
        return date.toString() === "Invalid Date" ? { date: true } : null
    }
}

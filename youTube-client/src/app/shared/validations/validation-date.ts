import { AbstractControl, ValidationErrors } from "@angular/forms"

export class ValidationDate {
    static date(control: AbstractControl): ValidationErrors | null {
        const date = new Date(control.value.toLocaleString())
        return date.toString() === "Invalid Date" ? { date: true } : null
    }
}

import { FormError } from "@app/shared/models/error.model"

const EmailErrors: FormError[] = [
    { name: "required", text: "Please enter a login email" },
    { name: "email", text: "The login email is invalid" }
]
const PasswordErrors: FormError[] = [
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

export const LoginFormErrors = {
    email: EmailErrors,
    password: PasswordErrors
}

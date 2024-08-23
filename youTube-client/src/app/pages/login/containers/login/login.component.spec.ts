import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormBuilder, ReactiveFormsModule } from "@angular/forms"
import { of } from "rxjs"

import { LoginFormErrors } from "../../constants/error.constants"
import { LoginService } from "../../services/login.service"
import { LoginComponent } from "./login.component"

describe("LoginComponent", () => {
    let component: LoginComponent
    let fixture: ComponentFixture<LoginComponent>
    const mockLoginService = {
        login: jest.fn().mockReturnValue(of(true))
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, LoginComponent],
            providers: [FormBuilder, { provide: LoginService, useValue: mockLoginService }]
        }).compileComponents()

        fixture = TestBed.createComponent(LoginComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })

    it("should initialize the loginForm", () => {
        expect(component.loginForm).toBeDefined()
        expect(component.loginForm.controls["username"]).toBeDefined()
        expect(component.loginForm.controls["password"]).toBeDefined()
    })

    it("should have the correct INPUTS", () => {
        expect(component.INPUTS).toEqual([
            { placeholder: "Email", formControlName: "username", type: "email", errors: LoginFormErrors.email },
            {
                placeholder: "Password",
                formControlName: "password",
                type: "password",
                errors: LoginFormErrors.password
            }
        ])
    })
})

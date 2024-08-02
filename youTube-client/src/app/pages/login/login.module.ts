import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"

import { LoginRoutingModule } from "./login-routing.module"

@NgModule({
    declarations: [],
    imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule]
})
export class LoginModule {}

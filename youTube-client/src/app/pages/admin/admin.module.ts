import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"

import { AdminRoutingModule } from "./admin-routing.module"

@NgModule({
    declarations: [],
    imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule]
})
export class AdminModule {}

import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

import { HeaderComponent } from "./components/header/header.component"

@NgModule({
    exports: [HeaderComponent],
    imports: [CommonModule, HeaderComponent]
})
export class CoreModule {}

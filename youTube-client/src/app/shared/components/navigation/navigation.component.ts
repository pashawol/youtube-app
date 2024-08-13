import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { NavigationService } from "@app/shared/services/navigation.service"
import { ButtonComponent } from "@shared/components"
import { Subject } from "rxjs"

@Component({
    selector: "app-navigation",
    standalone: true,
    imports: [ButtonComponent, CommonModule],
    templateUrl: "./navigation.component.html",
    styleUrl: "./navigation.component.scss"
})
export class NavigationComponent implements OnInit {
    @Input() token: { prev: string | null; next: string | null } = { prev: null, next: null }
    private pageTokenChanged = new Subject<string>()

    constructor(private navigationService: NavigationService) {}
    ngOnInit(): void {
        this.pageTokenChanged.subscribe((pageToken) => {
            this.navigationService.setTokenPage(pageToken)
        })
    }

    onChangeTokenPage(pageToken: string): void {
        this.pageTokenChanged.next(pageToken)
    }
}

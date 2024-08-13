import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { RequestService } from "@pages/youtube/pages/search/services/request.service"
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

    constructor(private requestService: RequestService) {}
    ngOnInit(): void {
        this.pageTokenChanged.subscribe((pageToken) => {
            this.requestService.setTokenPage(pageToken)
        })
    }

    onChangeTokenPage(pageToken: string): void {
        this.pageTokenChanged.next(pageToken)
    }
}

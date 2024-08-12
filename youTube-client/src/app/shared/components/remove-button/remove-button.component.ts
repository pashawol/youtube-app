import { Component, Input } from "@angular/core"
import { ButtonComponent } from "@app/shared/components"
import { deleteVideo } from "@app/store/actions/video.actions"
import { Store } from "@ngrx/store"

@Component({
    selector: "app-remove-button",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./remove-button.component.html",
    styleUrl: "./remove-button.component.scss"
})
export class RemoveButtonComponent {
    @Input() id: string

    constructor(private store: Store) {}
    removeCard(id: string): void {
        this.store.dispatch(deleteVideo({ id }))
    }
}

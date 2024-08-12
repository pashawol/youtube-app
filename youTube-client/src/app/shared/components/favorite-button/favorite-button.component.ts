import { Component, Input } from "@angular/core"
import { ButtonComponent } from "@app/shared/components"
import { Store } from "@ngrx/store"

@Component({
    selector: "app-favorite-button",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./favorite-button.component.html",
    styleUrl: "./favorite-button.component.scss"
})
export class FavoriteButtonComponent {
    @Input() id: string

    constructor(private store: Store) {}

    toggleFavorite(id: string): void {
        console.log(`Favorite button clicked ${id}`)
    }
}

import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { toggleFavorite } from "@app/pages/favorites/store/actions/favorites.actions"
import { selectIsFavorite } from "@app/pages/favorites/store/selectors/favorites.selectors"
import { ButtonComponent } from "@app/shared/components"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"

@Component({
    selector: "app-favorite-button",
    standalone: true,
    imports: [ButtonComponent, CommonModule],
    templateUrl: "./favorite-button.component.html",
    styleUrl: "./favorite-button.component.scss"
})
export class FavoriteButtonComponent implements OnInit {
    @Input() id: string

    isActive$: Observable<boolean>
    // "pi pi-heart-fill" || "pi pi-heart"

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.isActive$ = this.store.select(selectIsFavorite(this.id)) as Observable<boolean>
    }

    toggleFavorite(id: string): void {
        this.store.dispatch(toggleFavorite({ id }))
    }
}

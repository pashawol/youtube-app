import { Injectable, signal } from "@angular/core"

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    public tokenPageQuery$ = signal<{ prev: string; next: string }>({ prev: "", next: "" })

    public currentTokenPage$ = signal<string>("")

    setTokenPage(token: string) {
        this.currentTokenPage$.set(token)
    }

    setTokenPagesQuery(tokenPage: { prev: string; next: string }) {
        this.tokenPageQuery$.set(tokenPage)
    }
}

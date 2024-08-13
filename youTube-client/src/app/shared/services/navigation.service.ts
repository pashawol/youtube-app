import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    private tokenPageQuerySubject = new BehaviorSubject<{ prev: string; next: string }>({ prev: "", next: "" })
    public tokenPageQuery$ = this.tokenPageQuerySubject.asObservable()

    private currentTokenPageSubject = new BehaviorSubject<string>("")
    public currentTokenPage$ = this.currentTokenPageSubject.asObservable()

    setTokenPage(token: string) {
        this.currentTokenPageSubject.next(token)
    }

    setTokenPagesQuery(tokenPage: { prev: string; next: string }) {
        this.tokenPageQuerySubject.next(tokenPage)
    }
}

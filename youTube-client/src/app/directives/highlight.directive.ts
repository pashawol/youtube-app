import { Directive, ElementRef, Input, OnInit } from "@angular/core"

@Directive({
    selector: "[appHighlight]",
    standalone: true
})
export class HighlightDirective implements OnInit {
    @Input() appHighlight!: string
    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.setProperty("--bd-color", this.setBorderColor())
    }

    setBorderColor() {
        const today = new Date()
        const publishedDay = new Date(this.appHighlight)
        const diff = today.getTime() - publishedDay.getTime()
        const diffDays = diff / (1000 * 3600 * 24)

        if (diffDays <= 7) return "#025ef2"
        if (diffDays <= 30) return "#0ab306"
        if (diffDays <= 182) return "#fdcd1d"
        return "#d52914"
    }
}

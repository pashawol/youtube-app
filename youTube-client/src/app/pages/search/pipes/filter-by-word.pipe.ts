import { Pipe, PipeTransform } from "@angular/core"

import { Item } from "../models/response.model"

@Pipe({
    name: "filterByWord",
    standalone: true,
    pure: false
})
export class FilterByWordPipe implements PipeTransform {
    transform(items: Item[], searchText: string): Item[] {
        if (!items) return []
        if (!searchText) {
            return items
        }

        return items.filter((item) => {
            return item.snippet.title.toLowerCase().includes(searchText.toLowerCase())
        })
    }
}

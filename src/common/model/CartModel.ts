import { MenuItem } from "./MenuItemModel";

export class CartItem {
    item: MenuItem;
    count: number;
    constructor(item: MenuItem, count: number) {
        this.item = item;
        this.count = count;
    }
}

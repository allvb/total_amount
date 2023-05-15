import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalAmount(): number {
        let totalAmount = 0;
        for (let item of this.items) {
            totalAmount += item.price ;
        }
        return totalAmount;
    }

    amountWithDiscount(discount: number): number {
        const totalAmount = this.totalAmount();
        const currentDiscount = totalAmount * discount * 0.01;
        return totalAmount - currentDiscount;
    }

    deleteItem(id: number): void {
        this._items = this.items.filter((elem) => elem.id !== id);
    }
}

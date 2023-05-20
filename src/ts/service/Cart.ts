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
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    amountWithDiscount(discount: number): number {
        const totalAmount = this.totalAmount();
        const currentDiscount = totalAmount * discount * 0.01;
        return totalAmount - currentDiscount;
    }

    deleteItem(id: number): void {
        this._items = this.items.filter((elem: Buyable) => elem.id !== id);
    }
}

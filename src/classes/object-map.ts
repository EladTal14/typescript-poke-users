export class ObjectMap<T> {
    private _items: { [key: string]: T } = {};

    get length() {
        return Object.keys(this._items).length;
    }

    get items() {
        return this._items;
    }

    addItemToMap(key: string, newItem: T) {
        this._items[key] = newItem;
    }

    removeItemFromMap(key: string) {
        const items = Object.entries(this._items);
        const newItems: { [key: string]: T } = {};
        const itemKeyIndex = items.findIndex((item: [string, T]) => item[0] === key);
        let itemsToThrow: [string, T][] | undefined = undefined;
        if (itemKeyIndex >= 0) {
            itemsToThrow = items.splice(itemKeyIndex, 1);
            items.forEach((item) => {
                if (typeof item[0] === 'string') {
                    newItems[item[0]] = item[1];
                }
            })
            this._items = newItems;
        } else {
            console.warn('item is not in map');
        }
        return itemsToThrow;
    }
}
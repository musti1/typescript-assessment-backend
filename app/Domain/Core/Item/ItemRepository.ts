import Item from "./Item";

interface ItemRepository {
    /**
     * @param {Item} item
     * @return Promise<boolean>
     */
    add(item: Item): Promise<boolean>;

    /**
     * @return Promise<Item[]>
     */
    getAll(): Promise<Item[]>;

}

export default ItemRepository;

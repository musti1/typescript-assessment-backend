import ItemModel from "../Models/ItemModel";
import ItemRepository from "../../Domain/Core/Item/ItemRepository";
import Item from "../../Domain/Core/Item/Item";

class DbItemRepository implements ItemRepository {
    async add(item: Item): Promise<boolean> {
        try {
            await ItemModel.create(item);
            return true;
        } catch (e) {
            return false;
        }
    }

    async getAll(): Promise<Item[]> {
        try {
            const itemsObj = await ItemModel.find({});
            return itemsObj.map(itemObj => {
                return Item.createFromObject(itemObj);
            })
        } catch (e) {
            return []
        }
    }

    async getByItemId(itemId): Promise<Item | boolean> {
        try {
            const itemObj = await ItemModel.findOne({id: itemId});
            return Item.createFromObject(itemObj);

        } catch (e) {
            return false;
        }
    }

}

export default new DbItemRepository();
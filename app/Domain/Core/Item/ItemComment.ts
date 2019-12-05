const uuid = require('uuid/v1');

class ItemComment {

    id: string;
    itemId: number;
    userId: string;
    comment: string;

    constructor(
        id: string,
        itemId: number,
        userId: string,
        comment: string
    ) {
        this.id = id;
        this.itemId = itemId;
        this.userId = userId;
        this.comment = comment;
    }

    toStoreObject() {
        return {
            id: this.id,
            itemId: this.itemId,
            userId: this.userId,
            comment: this.comment,
        }
    }

    static createFromDetails(
        itemId: number,
        userId: string,
        comment: string): ItemComment {
        return new ItemComment(
            uuid(),
            itemId,
            userId,
            comment
        )
    }

    static createFromObject(obj: any): ItemComment {
        return new ItemComment(
            obj.id,
            obj.itemId,
            obj.userId,
            obj.comment
        );
    }
}

export default ItemComment;

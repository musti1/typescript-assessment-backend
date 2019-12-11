const uuid = require('uuid/v1');
import User from "../User";

class ItemComment {

    commentId: string;
    itemId: number;
    userId: string;
    comment: string;
    userDetail: User;

    constructor(
        commentId: string,
        itemId: number,
        userId: string,
        comment: string
    ) {
        this.commentId = commentId;
        this.itemId = itemId;
        this.userId = userId;
        this.comment = comment;
    }

    toStoreObject() {
        return {
            commentId: this.commentId,
            itemId: this.itemId,
            userId: this.userId,
            comment: this.comment,
        }
    }

    setUserDetail(userObj) {
        this.userDetail = new User(userObj.userId, userObj.firstName, userObj.lastName, userObj.email);
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
            obj.commentId,
            obj.itemId,
            obj.userId,
            obj.comment
        );
    }
}

export default ItemComment;

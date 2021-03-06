import { prop, Typegoose } from 'typegoose';

class ItemComment extends Typegoose {

    @prop()
    commentId?: string;

    @prop()
    itemId?: number;

    @prop()
    userId?: string;

    @prop()
    comment?: string;
}

const ItemCommentModel = new ItemComment().getModelForClass(ItemComment);

export default ItemCommentModel;
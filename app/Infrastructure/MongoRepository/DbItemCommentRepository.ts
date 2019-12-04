import ItemCommentModel from "../Models/ItemCommentModel";
import ItemCommentRepository from "../../Domain/Core/Item/ItemCommentRepository";
import ItemComment from "../../Domain/Core/Item/ItemComment";

class DbItemCommentRepository implements ItemCommentRepository {
    async add(itemComment: ItemComment): Promise<ItemComment | boolean> {
        try {
            return await ItemCommentModel.create(itemComment);
        }catch (e) {
            return false
        }
    }

    async getAllItemComment(itemId: string): Promise<ItemComment[]> {
        try {
            const itemCommentsObj = await ItemCommentModel.find({itemId});
            return itemCommentsObj.map(itemCommentObj => {
                return ItemComment.createFromObject(itemCommentObj);
            })
        }catch (e) {
            return []
        }
    }

    async updateComment(itemComment: ItemComment) {
        try {
            const itemCommentsObj = await ItemCommentModel.update({id: itemComment.id}, itemComment);
            return itemCommentsObj.map(itemCommentObj => {
                return ItemComment.createFromObject(itemCommentObj);
            })
        }catch (e) {
            return []
        }
    }

    async deleteComment(itemCommentId) {
        try{
            await ItemCommentModel.destroy({id: itemCommentId});
            return true;
        }catch (e) {
            return false;
        }
    }
}

export default new DbItemCommentRepository();
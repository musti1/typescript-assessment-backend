import ItemCommentModel from "../Models/ItemCommentModel";
import ItemCommentRepository from "../../Domain/Core/Item/ItemCommentRepository";
import ItemComment from "../../Domain/Core/Item/ItemComment";

class DbItemCommentRepository implements ItemCommentRepository {
    async add(itemComment: ItemComment): Promise<boolean> {
        try {
            await ItemCommentModel.create(itemComment);
            return true;
        }catch (e) {
            return false
        }
    }

    async getAllItemComment(itemId: string): Promise<ItemComment[]> {
        try {
            const itemCommentsObj = await ItemCommentModel.aggregate([
                {
                    $match: {
                        itemId
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'userId',
                        foreignField: 'userId',
                        as: 'userDetail'
                    }
                },
                {
                    $unwind: "$userDetail"
                }
            ]);
            return itemCommentsObj.map(itemCommentObj => {
                const itemComment = ItemComment.createFromObject(itemCommentObj);
                itemComment.setUserDetail(itemCommentObj.userDetail);
                return itemComment;
            });
        }catch (e) {
            return []
        }
    }

    async updateComment(itemComment: ItemComment): Promise<boolean> {
        try {
            await ItemCommentModel.findOneAndUpdate({commentId: itemComment.commentId}, itemComment, { new: true });
            return true
        }catch (e) {
            return false
        }
    }

    async deleteComment(commentId) {
        try{
            await ItemCommentModel.deleteOne({ commentId });
            return true;
        }catch (e) {
            return false;
        }
    }
}

export default new DbItemCommentRepository();
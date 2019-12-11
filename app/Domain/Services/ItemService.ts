import DbItemRepository from "../../Infrastructure/MongoRepository/DbItemRepository";
import DbItemCommentRepository from "../../Infrastructure/MongoRepository/DbItemCommentRepository";
import ItemComment from "../Core/Item/ItemComment";

class ItemService {
    static async AllItems(){
        try {
            return await DbItemRepository.getAll();
        }catch (e) {
            return false;
        }
    }

    static async getItem(itemId){
        try {
            return await DbItemRepository.getByItemId(itemId);
        }catch (e) {
            return false;
        }
    }

    static async getComments(itemId){
        try {
            return await DbItemCommentRepository.getAllItemComment(itemId);
        }catch (e) {
            return false;
        }
    }
    static async newComment(itemId, userId, comment){
        try {
            const itemComment = ItemComment.createFromDetails(itemId, userId, comment);
            return await DbItemCommentRepository.add(itemComment);
        }catch (e) {
            return false;
        }
    }

    static async editComment(itemCommentObj){
        try {
            return await DbItemCommentRepository.updateComment(itemCommentObj);
        }catch (e) {
            return false;
        }
    }

    static async removeComment(commentId){
        try {
            return await DbItemCommentRepository.deleteComment(commentId);
        }catch (e) {
            return false;
        }
    }
}

export default ItemService;
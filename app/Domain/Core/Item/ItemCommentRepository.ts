import ItemComment from "./ItemComment";

interface ItemCommentRepository {

    /**
     *
     * @param {ItemComment} itemComment
     * @return Promise<ItemComment>
     */
    add(itemComment: ItemComment): Promise<ItemComment | boolean>;

    /**
     *
     * @param itemId
     * @return Promise<ItemComment[]>
     */
    getAllItemComment(itemId: string): Promise<ItemComment[]>;

    /**
     *
     * @param {ItemComment} itemComment
     * @return Promise<ItemComment>
     */
    updateComment(itemComment: ItemComment): Promise<ItemComment>;

    /**
     *
     * @param itemCommentId
     * @return Promise<boolean>
     */
    deleteComment(itemCommentId): Promise<boolean>;
}

export default ItemCommentRepository;
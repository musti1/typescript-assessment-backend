import {Arg, Mutation, Query, Resolver} from "type-graphql";
import ItemType from "../../../app/Infrastructure/Graphql/Types/Item";
import ItemService from "../../../app/Domain/Services/ItemService";
import ItemCommentType from "../../../app/Infrastructure/Graphql/Types/ItemComment";

@Resolver()
class ItemResolver {

    @Query(() => [ItemType])
    async getAllItems() {
        return await ItemService.AllItems();
    }

    @Query(() => ItemType)
    async getItem(@Arg('itemId') itemId: number) {
        return await ItemService.getItem(itemId);
    }

    @Mutation( () => [ItemCommentType])
    async getItemComments(@Arg("itemId") itemId: number){
        return await ItemService.getComments(itemId);
    }

    @Mutation(() => Boolean)
    async addItemComment(
        @Arg("itemId") itemId: number,
        @Arg("userId") userId: string,
        @Arg("comment")comment: string) {
        return await ItemService.newComment(itemId, userId, comment);
    }

    @Mutation(() => Boolean)
    async editItemComment(
        @Arg("commentId") commentId: string,
        @Arg('comment') comment: string) {
        return await ItemService.editComment({commentId, comment});
    }

    @Mutation(() => Boolean)
    async deleteItemComment(@Arg("commentId") commentId: string) {
        return await ItemService.removeComment(commentId);
    }
}

export default ItemResolver;
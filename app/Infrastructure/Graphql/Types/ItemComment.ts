import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class ItemCommentType {
    @Field({nullable: true})
    commentId?: string;

    @Field({nullable: true})
    itemId?: number;

    @Field({nullable: true})
    userId?: string;

    @Field({nullable: true})
    comment?: string;
}

export default ItemCommentType;
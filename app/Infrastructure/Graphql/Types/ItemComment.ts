import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class ItemCommentType {
    @Field()
    id?: string;

    @Field()
    ItemId?: number;

    @Field()
    userId?: string;

    @Field()
    comment?: string;
}

export default ItemCommentType;
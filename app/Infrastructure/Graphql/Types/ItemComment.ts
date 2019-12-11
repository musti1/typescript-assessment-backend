import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";
import User from "./User";

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

    @Field(type => User, { nullable: true })
    userDetail?: User
}

export default ItemCommentType;
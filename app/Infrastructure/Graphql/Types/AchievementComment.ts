import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";
import User from "./User";

@ObjectType()
class AchievementCommentType {
    @Field({nullable: true})
    commentId?: string;

    @Field({nullable: true})
    achievementId?: number;

    @Field({nullable: true})
    userId?: string;

    @Field({nullable: true})
    comment?: string;

    @Field(type => User, { nullable: true })
    userDetail?: User
}

export default AchievementCommentType;
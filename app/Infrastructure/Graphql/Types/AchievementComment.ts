import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

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
}

export default AchievementCommentType;
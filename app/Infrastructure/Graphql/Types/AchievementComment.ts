import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class AchievementCommentType {
    @Field()
    id?: string;

    @Field()
    achievementId?: number;

    @Field()
    userId?: string;

    @Field()
    comment?: string;
}

export default AchievementCommentType;
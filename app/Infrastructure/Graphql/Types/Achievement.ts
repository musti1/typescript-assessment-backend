import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class Criteria {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    orderIndex: number;

    @Field({ nullable: true })
    max: number;
}

@ObjectType()
class AchievementType {
    @Field()
    id: number;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    points: number;

    @Field({ nullable: true })
    icon: string;

    @Field(type => [Criteria], { nullable: true })
    criteria: Criteria[];

    @Field({ nullable: true })
    accountWide: boolean;

    @Field({ nullable: true })
    factionId: number;
}

export default AchievementType;
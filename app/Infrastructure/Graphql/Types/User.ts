import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class User {
    @Field({nullable: true})
    firstName?: string;

    @Field({nullable: true})
    lastName?: string;
}

export default User;
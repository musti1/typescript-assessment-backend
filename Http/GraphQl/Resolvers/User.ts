import {Arg, Query, Resolver} from "type-graphql";


@Resolver()
class UserResolver {

    @Query(() => String)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string) {
        return "Hello World!" + name
    }

    @Query(() => String)
    async signUp(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Arg("lastName") lastName: string,
        @Arg("firstName") firstName: string) {

    }

}

export default UserResolver;
import { prop, Typegoose } from 'typegoose';

class User extends Typegoose {

    @prop()
    userId?: string;

    @prop()
    firstName?: string;

    @prop()
    lastName?: string;

    @prop()
    email?: string;

    @prop()
    password?: string;
}

const UserModel = new User().getModelForClass(User);

export default UserModel;
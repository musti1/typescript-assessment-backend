import UserModel from "../Models/UserModel";
import UserRepository from "../../Domain/Core/UserRepository";
import User from "../../Domain/Core/User";
import DbOperationFailureException from "./Exceptions/DataException";

class DbUserRepository implements UserRepository {
    /**
     * Add User in database
     * @param {User} user
     * @return Promise<boolean>
     */
    async add(user: User): Promise<boolean> {
        try {
            await UserModel.create(user.toStoreObject());
            return true
        } catch {
            throw new DbOperationFailureException();
        }
    }

    /**
     * Find User by Email Id and Password from database
     * @param {string} email
     * @param {string} password
     * @return {User}
     */
    async findByEmailAndPass(email: string, password: string): Promise<User> {
        try {
            const userObj = await UserModel.find({
                where: {
                    email,
                    password
                }
            });
            return User.createFromObject(userObj);
        } catch {
            throw new DbOperationFailureException();
        }
    }

    /**
     * Find User by User Id from database
     * @param {string} userId
     * @return {User}
     */
    async findByUserId(userId: string): Promise<User> {
        try {
            const userObj = await UserModel.find({
                where: {
                    userId
                }
            });
            return User.createFromObject(userObj);
        } catch {
            throw new DbOperationFailureException();
        }
    }

    /**
     * Delete User from database by User Id
     * @param {string} userId
     * @return Promise<boolean>
     */
    async remove(userId: string): Promise<boolean> {
        try {
            await UserModel.destroy({
                where: {
                    userId
                }
            });
            return true
        } catch {
            throw new DbOperationFailureException();
        }
    }

    /**
     * Update User in database
     * @param {User} user
     * @return Promise<boolean>
     */
    async update(user: User): Promise<boolean> {
        try {
            await UserModel.findOneAndUpdate({
                where: {
                    userId: user.userId
                }
            }, user.toStoreObject());
            return true
        } catch {
            throw new DbOperationFailureException();
        }
    }

}

export default new DbUserRepository();

import User from "./User";

interface UserRepository {
    /**
     * Add User
     * @param {User} user
     * @return Promise<boolean>
     */
    add(user: User): Promise<boolean>;

    /**
     * Find User by User Id
     * @param {string} userId
     * @return {User}
     */
    findByUserId(userId: string): Promise<User>;

    /**
     * Find User by Email Id and Password
     * @param {string} email
     * @param {string} password
     * @return {User}
     */
    findByEmailAndPass(email: string, password: string): Promise<User>;

    /**
     * Update User
     * @param {User} user
     * @return Promise<boolean>
     */
    update(user: User): Promise<boolean>;

    /**
     * Delete User by User Id
     * @param {string} userId
     * @return Promise<boolean>
     */
    remove(userId: string): Promise<boolean>;
}

export default UserRepository;

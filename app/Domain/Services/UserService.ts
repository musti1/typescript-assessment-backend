import DbUserRepository from "../../Infrastructure/MongoRepository/DbUserRepository";
import VerifyPassword from "../../Infrastructure/Auth/VerifyPassword";
import User from "../Core/User";
import UserServiceException from "./Exceptions/UserServiceException";

class UserService {
    /**
     * Add new User to store
     * @param {object} userObj
     * @return Promise<boolean>
     */
    static async newUser(userObj: any): Promise<boolean>{
        try {
            const {firstName, lastName, email, password} = userObj;
            const passwordHash = await VerifyPassword.generatePassword(password);
            const user = User.createFromDetails(firstName, lastName, email);
            user.setPassword(passwordHash);
            return await DbUserRepository.add(user);
        }catch {
            throw new UserServiceException();
        }
    }

    /**
     * Get User by email id and password
     * @param emailId
     * @param password
     * @return {User}
     */
    static async signIn(emailId: string, password: string): Promise<User>{
        try {
            const passwordHash = await VerifyPassword.generatePassword(password);
            return await DbUserRepository.findByEmailAndPass(emailId, passwordHash);
        }catch {
            throw new UserServiceException();
        }
    }

    /**
     * Deactivate the User by User Id
     * @param {string} userId
     * @return Promise<boolean>
     */
    static async deactivate(userId: string): Promise<boolean>{
        try {
            return await DbUserRepository.remove(userId);
        }catch {
            throw new UserServiceException();
        }
    }

    /**
     * Modify User Details
     * @param {object} userObj
     * @return Promise<boolean>
     */
    static async modifyUserDetails(userObj: any): Promise<boolean>{
        try {
            const user = User.createFromObject(userObj);
            if(typeof userObj.password !== 'undefined'){
                const password = await VerifyPassword.generatePassword(userObj.password);
                user.setPassword(password);
            }
            return await DbUserRepository.update(user);
        }catch {
            throw new UserServiceException();
        }
    }
}

export default UserService;

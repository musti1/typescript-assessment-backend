import * as  bcrypt from 'bcryptjs';


class VerifyPassword {

    /**
     * Get the string and convert to hash string
     * @param {string} password
     * @return {string} hash
     */
    static async generatePassword(password: string) {
        const salt = await bcrypt.genSaltSync(10);
        return await bcrypt.hash(password, salt);
    }

    /**
     * Compare the password and hash
     * @param password
     * @param hash
     * @return Promise<boolean>
     */
    static async verifyPassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
}

export default VerifyPassword;

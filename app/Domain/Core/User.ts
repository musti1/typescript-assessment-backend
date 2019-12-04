import uuid from 'uuid/v1';

class User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(
        userId: string,
        firstName: string,
        lastName: string,
        email: string,
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = '';
    }

    setPassword(password: string): void {
        this.password = password;
    }

    toStoreObject(){
        return {
            userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        }
    }

    static createFromDetails(firstName, lastName, email): User {
        return new User(
            uuid(),
            firstName,
            lastName,
            email
        )
    }
    static createFromObject(userObj: any): User {
        return new User(
            userObj.userId,
            userObj.firstName,
            userObj.lastName,
            userObj.email
        );
    }
}

export default User;

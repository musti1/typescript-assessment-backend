class UserServiceException extends Error{
    constructor(...args: any) {
        super(...args);
        Error.captureStackTrace(this, UserServiceException)
    }
}

export default UserServiceException;

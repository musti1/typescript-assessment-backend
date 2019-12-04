class DbOperationFailureException extends Error{
    constructor(...args: any) {
        super(...args);
        Error.captureStackTrace(this, DbOperationFailureException)
    }
}

export default DbOperationFailureException;

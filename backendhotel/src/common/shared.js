import createHttpErrors from 'http-errors';

export class Shared {
    static createError = (message = 'NOT FOUND', statusCode = 404) => {
        const err = createHttpErrors();
        err.message = message.toUpperCase();
        err.statusCode = statusCode;
        return err
    }
}
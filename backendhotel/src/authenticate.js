import jwt from 'jsonwebtoken';

export function signToken(payload) {
    const token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: "30 days" });
    return token;
}
export function decodeToken(token) {
    const detoken = jwt.verify(token, process.env.SECRETKEY)
    return detoken;
}
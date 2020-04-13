import Users from '../models/users';
import md5 from 'md5';
import * as authenticate from '../authenticate'

export async function getUsers(req, res, next) {
    try {
        const usersData = await Users.find();
        if (usersData) {
            res.status(200);
            res.json(usersData);
        } else {
            throw Error("Data_Return_Empty");
        }
    } catch (error) {
        next(error);
    }

}
export async function createUser(req, res, next) {
    try {
        const user = await Users.findOne({ email: req.body.email });
        if (user) {
            res.status(403);
            res.json({ message: "This email has was created by someone!!!" });
        } else {
            const createData = await Users.create({ ...req.body, password: md5(req.body.password) });
            if (createData) {
                res.status(201);
                res.json({
                    success: true,
                    createData
                });
            } else {
                throw Error("Data_Return_Empty");
            }
        }
    } catch (error) {
        res.status(500)
        next(error)
    }
}
export async function login(req, res, next) {
    try {
        const user = await Users.findOne({ email: req.body.email, password: md5(req.body.password) });
        if (user) {
            const token = authenticate.signToken({ name: user.name, email: user.email, admin: user.admin });
            await Users.update(user,{token: token});
            res.cookie('auth_hotel29', token);
            res.json({
                message: "You are login",
                success: true,
                token
            });
        } else {
            throw Error("Data_Return_Empty");
        }
    } catch (error) {
        res.status(500);
        next(error);
    }
}
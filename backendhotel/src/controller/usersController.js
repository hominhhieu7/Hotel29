import Users from '../models/users';
import md5 from 'md5';

export async function getUsers(req, res, next) {
    try {
        const usersData = await Users.find();
        if (usersData) {
            res.statusCode = 200;
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
        const createData = await Users.create({ ...req.body, password: md5(req.body.password) });
        if (createData) {
            res.statusCode = 200;
            res.json({
                success: true,
                createData
            });
        } else {
            throw Error("Data_Return_Empty");
        }
    } catch (error) {
        next(error)
    }
}
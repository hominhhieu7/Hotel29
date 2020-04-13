import express from 'express';
import { createHotel, getHotels,getOneHotel } from '../controller/hotelsController';
import { getUsers, createUser,login } from '../controller/usersController'

const router = express.Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getOneHotel);
router.put('/hotels/:id',testMiddleware, getOneHotel);
router.delete('/hotels/:id',testMiddleware, getOneHotel);
router.post('/hotels', testMiddleware, createHotel);


router.post('/signup', createUser);
router.get('/users',testMiddleware, getUsers);
router.post('/login',testMiddleware, login);
function testMiddleware(req, res, next) {
    next();
}
export default router;
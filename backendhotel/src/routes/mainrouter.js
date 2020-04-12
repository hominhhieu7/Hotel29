import express from 'express';
import { createHotel, getHotels,getOneHotel } from '../controller/hotelsController';
import { getUsers, createUser } from '../controller/usersController'

const router = express.Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getOneHotel);
router.put('/hotels/:id', getOneHotel);
router.get('/users', getUsers);
router.post('/users', testMiddleware, createUser);
router.post('/hotels', testMiddleware, createHotel);
function testMiddleware(req, res, next) {
    next();
}
export default router;
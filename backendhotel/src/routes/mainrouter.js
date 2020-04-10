import express from 'express';
import { createHotel, getHotels } from '../controller/hotelsController';
import { getUsers,createUser } from '../controller/usersController'

const router = express.Router();

router.get('/hotels', getHotels);
router.post('/hotels', createHotel);
router.get('/users', getUsers);
router.post('/users', createUser)
export default router;
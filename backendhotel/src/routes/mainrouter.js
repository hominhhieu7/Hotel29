import express from 'express';
import { createHotel, getHotels, getOneHotel, postComment } from '../controller/hotelsController';
import { getUsers, createUser, login } from '../controller/usersController'

const router = express.Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getOneHotel);
router.put('/hotels/:id', getOneHotel);
router.delete('/hotels/:id', getOneHotel);
router.post('/hotels/:id', postComment);
router.post('/hotels', createHotel);


router.use(testMiddleware);
router.post('/signup', createUser);
router.post('/login', login);

router.post('/comments');
router.get('/users', getUsers);



function testMiddleware(req, res, next) {
    console.log("Middleware");

    next();
}
export default router;
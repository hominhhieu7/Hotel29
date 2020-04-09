import express from 'express';
import { createHotel,getHotels } from '../controller/hotelsController';

const router = express.Router();

router.post('/hotels', createHotel);
router.get('/hotels', getHotels);

export default router;
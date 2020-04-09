import express from 'express';
import { createHotel } from '../controller/hotelsController';

const router = express.Router();

router.post('/hotels', createHotel);


export default router;
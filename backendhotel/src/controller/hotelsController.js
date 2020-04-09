import Hotels from '../models/hotels';
import mongoose from 'mongoose';

export function createHotel(req, res, next) {
    Hotels.create(req.body)
        .then((hotel) => {
            console.log('hotel created: ' + hotel);
            res.statusCode = 200;
            res.json(hotel)
        }, err => next(err))
        .catch(err => console.log(err))
}
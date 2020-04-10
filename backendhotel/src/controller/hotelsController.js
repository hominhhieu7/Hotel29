import Hotels from '../models/hotels';
import mongoose from 'mongoose';

export async function createHotel(req, res, next) {
    try {
        const dataHotel = await Hotels.create(req.body);
        if (dataHotel) {
            res.statusCode = 200;
            res.json({
                success: true,
                dataHotel,
            })
        } else {
            throw Error("Data_Return_Empty")
        }
    } catch (error) {
        next(error);
    }

}
export async function getHotels(req, res, next) {
    try {
        const dataHotels = await Hotels.find();
        if (dataHotels) {
            res.statusCode = 200;
            res.json(dataHotels);
        }
        else {
            throw Error("Data_Return_Empty")
        }
    } catch (error) {
        next(error)
    }

}
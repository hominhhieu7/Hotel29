import Hotels from '../models/hotels';
import mongoose from 'mongoose';

export async function createHotel(req, res) {
    const dataHotel = await Hotels.create(req.body);
    if (dataHotel) {
        res.statusCode = 200;
        res.json({
            success: true,
            dataHotel,
        })
    } else {
        const err = new Error("Error: " + res.statusMessage)
        res.statusCode = 500;
        res.json({
            success: false,
            error: err
        })
    }
}
export async function getHotels(req, res) {
    const dataHotels = await Hotels.find();
    if (dataHotels) {
        res.statusCode = 200;
        res.json(dataHotels);
    }
    else {
        const err = new Error("Error: " + res.statusMessage)
        res.statusCode = 500;
        res.json({
            success: false,
            error: err
        })
    }
}
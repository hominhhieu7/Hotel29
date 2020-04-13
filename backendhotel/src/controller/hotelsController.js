import Hotels from '../models/hotels';
import mongoose from 'mongoose';

export async function createHotel(req, res, next) {
    try {
        const dataHotel = await Hotels.create(req.body);
        if (dataHotel) {
            res.status(201);
            res.json({
                success: true,
                dataHotel,
            })
        } else {
            throw Error("Data_Return_Empty")
        }
    } catch (error) {
        res.status(500);
        next(error);
    }

}
export async function getHotels(req, res, next) {
    try {
        const dataHotels = await Hotels.find();
        if (dataHotels) {
            res.status(200);
            res.json(dataHotels);
        }
        else {
            throw Error("Data_Return_Empty")
        }
    } catch (error) {
        res.status(500);
        next(error)
    }

}
export async function getOneHotel(req, res, next) {
    try {
        const dataHotel = await Hotels.findById(req.params.id);
        if (dataHotel) {
            if (req.method === 'PUT') {
                const updateHotel = await Hotels.update(dataHotel, req.body);
                res.json({ updateHotel, success: "true" });
                res.status(204);
            } else if (req.method === 'DELETE') {
                const deleteHotel = await Hotels.deleteOne(dataHotel);
                res.json({ deleteHotel, success: "true" });
                res.status(204);
            } else {
                res.status(200);
                res.json(dataHotel);
            }
        }
        else {
            throw Error("Data_Return_Empty")
        }
    } catch (error) {
        res.status(500);
        next(error)
    }

}
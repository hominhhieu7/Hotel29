import mongoose from 'mongoose';
var Schema = mongoose.Schema;


const commentsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    hotelId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Comments', commentsSchema);
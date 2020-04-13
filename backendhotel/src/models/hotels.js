import mongoose from 'mongoose';

const HotelsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    like: {
        type: Number,
    },
    streetAdress:{
        type: String,
        required: true
    },
    countryAdress:{
        type: String,
        required: true
    },
    stateAdress:{
        type: String,
        required: true
    },
    star:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    }
},
    {
        timestamps: true
    }

)
export default mongoose.model('Hotels', HotelsSchema);
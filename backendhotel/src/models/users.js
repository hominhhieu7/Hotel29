import mongoose from 'mongoose';


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
    },
    birth: {
        type: Date,
    },
    token:{
        type: String
    },
    admin:{
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})
export default mongoose.model('Users', usersSchema)
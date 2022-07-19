import mongoose from "mongoose";

const VehincleSChema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    driver: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    Featured: {
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Vehincle", VehincleSChema);
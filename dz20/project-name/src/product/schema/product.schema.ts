mport * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
});
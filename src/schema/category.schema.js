import mongoose from "mongoose";

const ctschema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    slug: {
        type: String,
        unique: true,
        required: true,
    },

}, { timestamps: true }

)

const Category = mongoose.model('category', ctschema)

export default Category
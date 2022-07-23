import mongoose from "mongoose";



const product = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
    },
    bestsaller: {
        type: String,
        enum: ["yes", "no"],
        default: 'no'
    },
    caseQuantity: {
        type: Number,
        require: true
    },
    retailPrice: {
        type: Number,
        require: true
    },

    unitholesalePrice: {
        type: Number,
        require: true
    },


    description: {
        type: String,
        require: true,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'category'
    },

    styleAndDimensions: [{

        options: {
            type: String,
            // enum: ["color", "scent", "size", "material"]
        },
        sku: {
            type: String,
        },
        weight: {
            type: Number,
        },
        dimensions: {
            length: {
                type: Number,
            },
            breadth: {
                type: Number,
            },
            height: {
                type: Number,
            }
        },
        optionStatus: {
            type: String,
            // enum: ["activate", "deactivate"],
            default: "activate"

        }

    }],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'post'
    }, 
 

    updateDate: Date
}, { timestamps: true })

const Productschema = mongoose.model('product', product)

export default Productschema

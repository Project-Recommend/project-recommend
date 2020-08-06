const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            maxlength: 50,
        },
        description: {
            type: String,
        },
        link: {
            type: String,
        },
        codinglanguage: {
            type: String,
        },
        skilllevel: {
            type: Number,
            default: 1,
        },
        participation: {
            type: Number,
            default: 1,
        },
        tag: {
            type: String,
        },
        // images: {
        //     type: Array,
        //     default: [],
        // },
        // sold: {
        //     type: Number,
        //     maxlength: 100,
        //     default: 0,
        // },
        // views: {
        //     type: Number,
        //     default: 0,
        // },
    },
    { timestamps: true }
);

productSchema.index(
    {
        title: "text",
        description: "text",
    },
    {
        weights: {
            name: 6,
            description: 1,
        },
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };

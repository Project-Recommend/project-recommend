const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
    {
        writer: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        title: {
            type: String,
            maxlength: 50
        },
        description: {
            type: String
        },
        link: {
            type: String
        },
        language: {
            type: String,
            maxlength: 50
        },
        skill_level: {
            type: String,
            maxlength: 50
        },
        participation: {
            type: String,
            maxlength: 50
        },
        tags: {
            type: String
        },
        sold: {
            type: Number,
            maxlength: 100,
            default: 0,
        },
        views: {
            type: Number,
            default: 0,
        }
    }, { timestamps: true }
)

productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 7,
        description: 1,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }
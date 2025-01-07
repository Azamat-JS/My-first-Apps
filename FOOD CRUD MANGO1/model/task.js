const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be provided'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 letters']
    },
    price: {
        type: Number,
        required: true,
        default:false
    }
})

module.exports = mongoose.model("Food", foodSchema)
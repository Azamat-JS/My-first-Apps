const mongoose = require('mongoose')

const CenterSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide school name'],
        minlength: 3,
        maxlength: 50
    },
    location:{
        type:String,
        required:[true, 'Please provide location'],
        minlength:5
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: 'Owner',
        required:[true, 'Please provide a owner']
    },
}, {timestamps:true})

module.exports = mongoose.model("Center", CenterSchema)
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const OwnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide a name'],
        minlength:3,
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Please provide an email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'Please provide a password'],
        minlength:6
    }
})

OwnerSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
next()
})

OwnerSchema.methods.createJWT = function () {
    return jwt.sign({ownerId:this._id, name:this.name}, process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_LIFETIME}
    ) 
}

OwnerSchema.methods.comparePassword = async function(ownerPassword){
    const isMatch = await bcrypt.compare(ownerPassword, this.password)
    return isMatch
}
module.exports = mongoose.model('Owner', OwnerSchema)
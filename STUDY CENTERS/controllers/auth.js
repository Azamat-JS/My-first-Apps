const Owner = require("../models/owners");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
    const owner = await Owner.create({...req.body})
    const token = owner.createJWT()
    res.status(StatusCodes.CREATED).json({owner:{name:owner.name}, token})
}

const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }
    const owner = await Owner.findOne({email})
    if(!owner){
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const isPasswordCorrect = await owner.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = owner.createJWT()
    res.status(StatusCodes.OK).json({owner:{name:owner.name}, token})
}


module.exports = {
  register,
  login,
};

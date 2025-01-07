const CustomAPIError = require('../middleware/custom-api')
const User = require('../models/user')

const register = async (req, res) => {
    const user = await User.create({...req.body})
   const token = user.createJWT()
   res.status(201).json({user: {name:user}, token})
}

const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        throw new CustomAPIError('Please provide email and passwor')
    }
    const user = await User.findOne({email})
  if(!user){
    throw new CustomAPIError('Invalid credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if(!isPasswordCorrect){
    throw new CustomAPIError('Invalid password')
  }
  const token = user.createJWT()
  res.status(200).json({user: {name:user}, token})
}

module.exports = {
    register, 
    login
}
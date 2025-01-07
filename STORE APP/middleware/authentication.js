const CustomAPIError = require('../middleware/custom-api')
const jwt = require('jsonwebtoken')


const verifyAdmin = (req, res, next) => {
    const token = req.headers.authorization
    try {
    if(!token){
      throw new CustomAPIError('Authentication invalid', 401)
    }
      const payload = jwt.verify(token, process.env.JWT_PAROL)
      req.user = payload
      if(payload.userPosition !== 'admin'){
    throw new CustomAPIError('You are not admin', 401)
    } 
    next()
  }
    catch (error) {
    throw new CustomAPIError('Authentication invalid', 401)
  }
}
module.exports = verifyAdmin


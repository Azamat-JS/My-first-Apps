const CustomAPIError = require('../middleware/custom-api')

const errorHandlerMiddleware = async (err, req, res, next) => {
 if(err instanceof CustomAPIError){
  return res.status(err.statusCode).json({message:err.message})
 }
  return res.status(500).send('Something went wrong, please try again')
}

module.exports = errorHandlerMiddleware

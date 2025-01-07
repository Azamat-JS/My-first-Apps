const CustomAPIError = require('../errors/custom-api')
const BadRequestError = require('../errors/bad-request')
const NotFoundError = require('../errors/not-found')
const UnauthenticatedError = require('../errors/unauthentication')

module.exports = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError
}
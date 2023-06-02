const CustomAPIError = require('./customAPI')
const UnauthenticatedError = require('./authntucation')
const BadRequestError = require('./badRequest')

module.exports = {
    CustomAPIError,
    UnauthenticatedError,
    BadRequestError
}
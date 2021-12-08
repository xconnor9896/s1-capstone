const {StatusCodes} = require('http-status-codes')

const CustomAPIError = require('../error/custom-api-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    
    res.json( {err} )

    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "something went wrong try again later"
    }
    
    if(err.name === "ValidationError"){
        customError.msg = Object.values(err.errors)
            .map(item => item.message)
            .join(", ")
        customError.statusCode = 400;
    }

    if(err.code && err.code === 11000) {
        customError.msg = `entered user email already exists: ${Object.values(err.keyValue)}, please enter a new email`
        customError.statusCode = 400;
    }

    if(err.name === 'CastError') {
        customError.msg = `no item found with id: ${err.value}`
        customError.statusCode = 400;
    }

    return res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware;
const { constants } = require("../Constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR: {
            res.json({
                title: "Validation error",
                message: err.message,
                stackTrace:err.stackTrace
            })
        }
        case constants.NOT_FOUND: {
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace:err.stackTrace
            })
        }
        case constants.UNAUTHORIZED: {
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace:err.stackTrace
            })
        }
        case constants.FORBIDDEN: {
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace:err.stackTrace
            })
        }
        case constants.SERVER_ERROR: {
            res.json({
                title: "Server error",
                message: err.message,
                stackTrace:err.stackTrace
            })
        }
        default:
            console.log("No Error")
            break;
    }
}

module.exports=errorHandler
const errorCodes = {
    INTERNAL_SERVER_ERROR: {code: 500, msg: "Internal server error"},
    NOT_FOUND: {code: 404, msg: "Not found"}
};

const errorHandler = (req, res, next) => {
    console.log("errorHandler middleware called");
    switch (res.errorStatus) {
        case errorCodes.INTERNAL_SERVER_ERROR.code:
            res.status(errorCodes.INTERNAL_SERVER_ERROR.code)
            .json({error: errorCodes.INTERNAL_SERVER_ERROR.msg});
            break;
        case errorCodes.NOT_FOUND.code:  
            res.status(errorCodes.NOT_FOUND.code)
            .json({error: errorCodes.NOT_FOUND.msg});
            break;
        default:
            console.log("Unable to handler error");
    }
}

module.exports = {errorHandler};
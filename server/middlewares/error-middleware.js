const ApiError = require('../exceptions/api-error');

module.exports = function(err, req, res, next) {
    //console.log("890898");
    console.log(err);

    //function Er(){}

    //var Err = new ApiError();

    //console.log("890898");
    //console.log(ApiError);
    console.log(err instanceof ApiError);
    //console.log("890898");

    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message, errors: err.errors})        
    }

    return res.status(500).json({message: "Непредвиденная ошибка"})
}
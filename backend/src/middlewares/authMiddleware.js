const jwt = require("jsonwebtoken");


const { apiResponse } = require('../helpers');

const authorize = async (req, res, next) => {
    if(req.headers.authorization === undefined)
        req.headers.authorization = '';

    const token = req.headers.authorization.split(' ')[1]; 
    
    if(!token){
        return res.status(401).json(apiResponse({
            status: false,
            messages: {
                main: ['Authentication Error']
            },
        }));
    }

    req.user = await validateJWTToken(token);
    if(req.user === null){
        return res.status(401).json(apiResponse({
            status: false,
            messages: {
                main: ['Authentication Error']
            },
        }));
    }

    next();
}

const validateJWTToken = async (token, include = null) => {
    try{
        const decodedToken = jwt.verify(token, 'xx');

        const users = require('../database/users.json');
        for(var i=0;i<users.length;i++){
            if(decodedToken.id == users[i].id){
                return users[i];
            }
        }

        return null;
    }catch(e){
        return null;
    }

}

module.exports = {
    authorize,
    validateJWTToken,
}
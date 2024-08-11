const jwt = require("jsonwebtoken");

const { apiResponse } = require('../helpers');

const login = async (req, res) => {
    const token = jwt.sign(
        req.user,
        'xx',
        { expiresIn: "1d" }
    );

    
    return res.status(200).json(apiResponse({
        status: true,
        data: {
            token,
            user: req.user
        }
    }));
}


module.exports = {
    login,
}
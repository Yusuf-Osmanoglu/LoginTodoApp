const fs = require('fs');

const bcrypt = require('bcrypt');
const { apiResponse, joiParse } = require('../helpers');
const { Auth } = require('../schemas');

const login = async (req, res, next) => {
    const { error } = Auth.login.validate(req.body, { allowUnknown: true, abortEarly: false });
    if (error !== undefined) {
        return res.status(400).json(apiResponse({
            status: false,
            messages: joiParse(error.details),
        }));
    }


    if(!global.users){
        global.users = require('../database/users.json');
    }

    const users = global.users;

    for(var i=0;i<users.length;i++){
        if(req.body.username == users[i].username){
            if(!bcrypt.compareSync(req.body.password, users[i].password)){
                return res.status(401).json(apiResponse({
                    status: false,
                    messages: {
                        main: ['Kullanıcı Adı / Şifre Hatalı.']
                    },
                }));
            }

            req.user = Object.assign({}, users[i]);
            delete req.user.password;

            next();

            return;
        }
    }

    return res.status(401).json(apiResponse({
        status: false,
        messages: {
            main: ['Kullanıcı Adı / Şifre Hatalı.']
        },
    }));
}

module.exports = {
    login,
}
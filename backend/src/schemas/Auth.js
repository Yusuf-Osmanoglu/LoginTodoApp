const joi = require('joi');

const login = joi.object({
    username: joi.string()
        .required()
        .min(3)
        .max(32)
        .messages({
            'string.min': 'Kullanıcı Adı Minimum 3 Karakter Girilmelidir.',
            'string.max': 'Kullanıcı Adı Maksimum 10 Karakter Girilmelidir.',
            'string.empty': 'Kullanıcı Adı Zorunludur.',
            'any.required': 'Kullanıcı Adı Zorunludur.',
        }),
    password: joi.string()
        .required()
        .min(6)
        .max(32)
        .messages({
            'string.min': 'Şifre Minimum 6 Karakter Girilmelidir.',
            'string.max': 'Şifre Maksimum 32 Karakter Girilmelidir.',
            'string.empty': 'Şifre Zorunludur.',
            'any.required': 'Şifre Zorunludur.'
        })
});

module.exports = {
    login,
}
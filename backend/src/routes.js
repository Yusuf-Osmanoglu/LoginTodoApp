const express = require('express');

const { AuthController, NewsController } = require('./controllers');
const { AuthMiddleware } = require('./middlewares');
const { AuthRequest } = require('./requests');

const router = express.Router();


//Auth Rotalar
const authRouter = express.Router();
authRouter.route('/login').post(AuthRequest.login, AuthController.login);
router.use('/auth', authRouter);

//Auth Rotalar
const newsRouter = express.Router();
newsRouter.route('/').get(AuthMiddleware.authorize, NewsController.list);
router.use('/news', newsRouter);


module.exports = router;
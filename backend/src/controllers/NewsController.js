const { apiResponse } = require('../helpers');


const list = async (req, res) => {
    const news = require('../database/news.json');

    return res.status(200).json(apiResponse({
        status: true,
        data: {
            news
        }
    }));
}

module.exports = {
    list
}
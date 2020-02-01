const axios = require('axios');

const api = axios.create({
    baseURL: 'https://nhentai.appspot.com/',
});

module.exports = api;
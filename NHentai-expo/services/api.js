const axios = require('axios');

const api = axios.create({
    // baseURL: 'http://192.168.0.19:8080/', 
    baseURL: 'https://nhentai.appspot.com/', 
});

module.exports = api;
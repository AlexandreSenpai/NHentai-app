const api = require('./services/api.js')

const home_page = (page) => {
    if(page){
        return api.homepage(page);
    }else{
        return undefined;
    };
};

const gallery = (id) => {
    if(id){
        return api.g(id);
    }else{
        return undefined;
    }
}

const randomDoujin = () => {
    return api.random();
}

const search = (term, page, order) => {
    if(term){
        return api.search(term, page, order)
    }else{
        return undefined;
    }
}

module.exports = {
    home_page,
    gallery,
    randomDoujin,
    search,
}
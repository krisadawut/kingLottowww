const request = require('request');
 
const ApiNews = (callback) => {
    request('http://localhost:3000/api/news', { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}
const ApiUsers = (callback) => {
    request('http://localhost:3000/api/users', { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}
const ApiType = (callback) => {
    request('http://localhost:3000/api/type', { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

const ApiUserType = (callback) => {
    request('http://localhost:3000/api/usertype', { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports = {
    ApiNews : ApiNews
    ,ApiUsers : ApiUsers
    ,ApiType : ApiType
    ,ApiUserType : ApiUserType
}

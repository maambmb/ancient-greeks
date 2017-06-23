const data = require( "./data.json" );

module.exports = {
    raw : data,
    get : () => data[Math.floor(Math.random()*data.length)]
};


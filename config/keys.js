require('dotenv').load();

module.exports = {
    googleClientID: process.env.googleClientID,
    googleClientSecret: process.env.googleClientSecret,
    mongoURI: process.env.mongoURI,
    cookieKey: process.env.cookieKey
}
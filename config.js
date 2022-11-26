require('dotenv').config();

module.exports = {
    isVercel: process.env.IS_VERCEL || false,
    port: process.env.API_PORT || 8080,
    mongoUri: process.env.MONGO_URI,
};
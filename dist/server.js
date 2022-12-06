const app = require('../app')

console.log(app);

const serverless = require('serverless-http')

module.exports.handler = serverless(app)
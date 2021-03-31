const { environment } = require('@rails/webpacker')
const erb = require('./loaders/erb')
const provide = require('./plugins/provide')
environment.plugins.prepend('provide', provide)

environment.loaders.prepend('erb', erb)
module.exports = environment

const mongoose = require('mongoose')
const PointSchema = require('../utils/PointSchema')

const MakerSchema = new mongoose.Schema({
    user: String,
    password: String,
    makerId: String,
})

module.exports = mongoose.model('MakerAccount', MakerSchema)
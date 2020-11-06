const mongoose = require('mongoose')
const PointSchema = require('../utils/PointSchema')

const MakerSchema = new mongoose.Schema({
    name: String,
    bio: String,
    instagram: String,
    whatsapp: String,
    gallery: [{
        imageUrl: String,
        title: String,
        width: Number,
        height: Number
    }],
    services:
        [
            {
                category: String,
                price: Number,
                imageUrl: String,
                description: String,
                locale: String,
            },
        ],
    appointments: [{date: Date, name: String}],
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    meta: {
        votes: Number,
        favs: Number
    },
    comments: [{ body: String, date: Date }],
    avatarUrl: String,
})

module.exports = mongoose.model('Maker', MakerSchema)
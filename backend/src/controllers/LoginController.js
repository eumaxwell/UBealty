const MakerAccount = require('../models/MakerAccount')
const Maker = require('../models/Maker')

// index, show, store, update, destroy
module.exports = {

    async index(req, res) {
        const { user, password } = req.body
        const acc = await MakerAccount.find({ user });
        if (acc.password === password) {
            const maker = await Maker.find({ id: acc.makerId });
            return res.json(maker)
        }
        else {
            return res.json(null)
        }
    },

    async store(req, res) {

        console.log("LoginController - store")

        const { user, password } = req.body
        let makerAccount = await MakerAccount.findOne({ user })

        if (!makerAccount) {

            console.log(user, password)

            const location = {
                type: 'Point',
                coordinates: [-48.1501482, -15.7958425,]
            }

            const preMaker = {
                name: user,
                bio: '',
                instagram: '',
                gallery: [],
                whatsapp: '',
                services: [],
                location,
                meta: {
                    votes: 0,
                    favs: 0
                },
                appointments: [],
                comments: [],
                avatarUrl: "http://i.imgur.com/XP2BE7q.jpg",
            }
            console.log("criando\n",preMaker)
            maker = await Maker.create(preMaker)

            makerAccount = await MakerAccount.create({
                user,
                password,
                makerId: maker.id,
            })
            return res.json(maker)
        }
        return res.json(null)

    }
}

const Maker = require('../models/Maker')

// index, show, store, update, destroy

module.exports = {

  async index(req, res) {
    let { user } = req.query
    await Maker.findOne({ user }).
      then(maker => {
        return res.json(maker)
      })
    return res.json("")
  },

  async getFilters(req, res) {
    console.log("getFilters")
    const filters = [
      {
        name: 'Serviços',
        id: 0,
        // these are the children or 'sub items'
        children: [
          { name: 'Cabelo', id: 10, },
          { name: 'Cílios', id: 11, },
          { name: 'Estetica', id: 12, },
          { name: 'Corporal', id: 13, },
          { name: 'Facial', id: 14, },
          { name: 'Maquiagem', id: 15, },
          { name: 'Micropigmentação', id: 16, },
          { name: 'Sobrancelha', id: 17, },
          { name: 'Unha', id: 18, },
        ],
      },
      {
        name: 'Local de atendimento',
        id: 1,
        // these are the children or 'sub items'
        children: [
          { name: 'Estudio', id: 5, },
          { name: 'Domicílio', id: 6, },
        ],
      },
    ];
    return res.json(filters)
  },


  async store(req, res) {
    const { name, services, latitude, longitude } = req.body
    let maker = await Maker.findOne({ name })

    if (false)
      if (!maker) {

        //const servicesArray = parseStringAsArray(services)
        const location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        }

        console.log(name, services, location)

        maker = await Maker.create({
          github_username,
          name,
          avatar_url,
          bio,
          services,
          location
        })

        // Filtrar as conexões que estão há no máximo 10km de distancia e tecnologias
        /*
        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            tecnologiasArray
        )
 
        sendMessage(sendSocketMessageTo, 'new-dev', dev)
        */

      }

    return res.json(dev)
  },

  async update(req, res) {

    try {
      const { maker } = req.body;
      console.log("update", maker._id, maker);
      //await Cliente.updateMention(id, client);
      await Maker.replaceOne({ _id: maker._id }, maker);
      //await Maker.findByIdAndUpdate(maker._id, maker);
      res.status(200).send({
        message: 'Maker atualizado com sucesso!'
      });
    } catch (e) {
      console.log('Falha ao atualizar o Maker.');
      console.log(e)
      res.status(500).send({ message: 'Falha ao atualizar o Maker.' });
    }
  },

  async destroy(req, res) {
    
    const { id } = req.params;
    //const ong_id = request.headers.authorization;
    //const clientCPF = req.body
    console.log("destroy", id)
    await Cliente.findByIdAndDelete(id);
    socket.updateConnections();
    return res.json("apagado")
  }
}


/**
    name: String,
    bio: String,
    instagram: String,
    whatsapp: String,
    services:
        [
            {
                url: String,
                description: String
            },
        ],
    schedule: [Date],
    locale: String,
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


 *
 {
  link: 'https://www.instagram.com/eumaxwell',
  id: '206080074',
  biography: '',
  subscribersCount: 522,
  subscribtions: 660,
  fullName: 'Maxwell',
  highlightCount: 0,
  isBusinessAccount: false,
  isRecentUser: false,
  accountCategory: null,
  linkedFacebookPage: null,
  isPrivate: false,
  isVerified: false,
  profilePic: 'https://instagram.fbsb13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/68795759_2318924701518461_3218021701275090944_n.jpg?_nc_ht=instagram.fbsb13-1.fna.fbcdn.net&_nc_ohc=vmlgwIQuLsYAX_UDp6O&oh=81e52d13ca66d3a4227d05dfd7f94555&oe=5F82C359',
  profilePicHD: 'https://instagram.fbsb13-1.fna.fbcdn.net/v/t51.2885-19/s320x320/68795759_2318924701518461_3218021701275090944_n.jpg?_nc_ht=instagram.fbsb13-1.fna.fbcdn.net&_nc_ohc=vmlgwIQuLsYAX_UDp6O&oh=613337688776fed442ef45baadf08140&oe=5F84D921',
  username: 'eumaxwell',
  postsCount: 86,
  posts: [
    {
      id: '2374967146042955767',
      shortCode: 'CD1lAlFHRf3',
      url: 'https://www.instagram.com/p/CD1lAlFHRf3/',
      dimensions: [Object],
      imageUrl: 'https://instagram.fbsb13-1.fna.fbcdn.net/v/t51.2885-15/e35/117321791_657984768144414_8864094214944246470_n.jpg?_nc_ht=instagram.fbsb13-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=X2OBpcWRc5gAX8IQ8fp&oh=f8e3f3021d4a2ff2222201b860c56015&oe=5F83D991',
      isVideo: false,
      caption: '13/08/2017\nJa posso dizer que vivia perigosamente  kk',
      commentsCount: 11,
      commentsDisabled: false,
      timestamp: 1597338167,
      likesCount: 85,
      location: null,
      children: []
    },
  ]
}
 */
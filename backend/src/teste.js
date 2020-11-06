
//npm install user-instagram
const userInstagram = require("user-instagram");


module.exports = function getUserInsta() {

    // Gets informations about a user
    console.log(userInstagram)
    userInstagram('eumaxwell') // Same as getUserData()
        .then(console.log)
        .catch(console.error);
}


module.exports = function getPostInsta() {

    // Gets information about a post
    userInstagram.getPostData('CD9EMe5sHP5')
        .then(console.log)
        .catch(console.error)
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
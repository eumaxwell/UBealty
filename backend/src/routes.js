const { Router } = require('express')
const MakerController = require('./controllers/MakerController')
const SearchController = require('./controllers/SearchController')
const LoginController = require('./controllers/LoginController')

const routes = Router()


routes.get('/login', LoginController.index)
routes.post('/login', LoginController.store)

routes.get('/filters', MakerController.getFilters)
routes.get('/maker', MakerController.index)
routes.post('/maker', MakerController.store)
routes.post('/update_maker', MakerController.update)

routes.get('/search', SearchController.index)

module.exports = routes
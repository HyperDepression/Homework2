const Router = require('../src/router')
const router = new Router()
const genreController = require('../controllers/genreController')

router.post('/genre', genreController.create)
router.put('/genre', genreController.update)
router.delete('/genre', genreController.delete)
router.get('/genre', genreController.get)

module.exports = router
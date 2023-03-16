const Router = require('../src/router')
const router = new Router()
const filmController = require('../controllers/filmController')

router.post('/film', filmController.create)
router.put('/film', filmController.update)
router.delete('/film', filmController.delete)
router.get('/film', filmController.get)

module.exports = router
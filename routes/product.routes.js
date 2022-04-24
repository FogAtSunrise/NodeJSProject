const Router = require('express')
const router = new Router()
const controller = require("../controllers/product.controller")

router.post('/listproduct', controller.createProduct)
router.get('/listproduct', controller.getProducts)
router.post('/listproduct', controller.updateProduct)
router.get('/listproduct/delete/:id', controller.deleteProduct)
router.get('/listproduct/:id', controller.getProductById)

module.exports = router
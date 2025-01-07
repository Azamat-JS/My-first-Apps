const express = require('express')
const router = express.Router()
const verifyAdmin = require('../middleware/authentication')

const {getSingleProduct, getAllProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/products')

router.route('/').get(getAllProducts).post(verifyAdmin, createProduct)
router.route('/:id').get(getSingleProduct).patch(verifyAdmin, updateProduct).delete(verifyAdmin, deleteProduct)

module.exports = router
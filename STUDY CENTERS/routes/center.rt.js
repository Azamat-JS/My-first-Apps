const express = require('express')
const router = express.Router()
const {
    getAllCenters,
    getSingleCenter,
    createCenter,
    updateCenter,
    deleteCenter
} = require('../controllers/center')

router.route('/').post(createCenter).get(getAllCenters)
router.route('/:id').get(getSingleCenter).patch(updateCenter).delete(deleteCenter)

module.exports = router
const express = require('express');
const router = express.Router();
const subscriptionController = require('./../controllers/subscription-controller');
const { catchErrors } = require('./../handlers/error-handlers');

router.get('/', subscriptionController.homePage);

router.get('/api/v1/countries', catchErrors(subscriptionController.getCountries));
router.get('/api/v1/delivery', catchErrors(subscriptionController.getDeliveryMoments));

module.exports = router;

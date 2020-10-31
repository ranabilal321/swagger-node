const router = require('express').Router();

//const ApiDocsController = require('../controllers/ApiDocsController');
const IceCreamController = require('../controllers/IceCreamController');
const CookieController = require('../controllers/CookieController');

//IceCream Routes
router.get('/iceCream', IceCreamController.iceCream);
router.get('/iceCream/:flavorId', IceCreamController.iceCreamById);
router.post('/iceCream', IceCreamController.persistIceCream);

//Cookie Routes
router.get('/cookies', CookieController.cookies);
router.get('/cookie/:flavorId', CookieController.cookieById);
router.post('/cookie', CookieController.persistCookie);

module.exports = router;
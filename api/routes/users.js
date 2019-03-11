var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'd663943e-2f87-4157-bd65-88b7f2d12734',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

/* GET users user. */
router.get('/profile', auth, ctrlProfile.profileRead);

/* authentification */
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

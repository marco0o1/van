var express = require('express');
var router = express.Router();
var path = require('path');

var ctrlGeneral = require('../controllers/general')
/* GET home page. */
router.get('/', ctrlGeneral.homePage);

/* SEND html file to /app/ */
router.get('/app/', function(req, res) {
    res.sendFile(path.join(__dirname, '../van/build/index.html'));
});


module.exports = router;

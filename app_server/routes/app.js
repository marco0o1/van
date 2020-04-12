var express = require('express');
var router = express.Router();
var path = require('path');


/* SEND html file to /app/ */
router.get('/', function(req, res) {
    console.log("marco se come a su gatito");
    res.sendFile(path.join(__dirname, '../van/build/index.html'));
});

  module.exports = router;

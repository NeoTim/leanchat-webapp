var router = require('express').Router();
var AV = require('leanengine');

router.get('/', function(req, res, next) {
  res.send('This is Main page');
});

module.exports = router;

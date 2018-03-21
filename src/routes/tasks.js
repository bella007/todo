var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render('hey this worked');
// });
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/another/route', function(req, res, next) {
    // res.json({ hello: 'world' });
    // res.render('hey this worked', );
});


module.exports = router;
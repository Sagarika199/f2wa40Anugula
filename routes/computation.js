var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next) {
    var x = Math.random();
    var y;
    y = req.query.y;
    if(y==undefined)
    {
        y=x;
    }

  res.render('computation', { title: `f(${y}) is ${Math.round(y)}` });
})

/* GET home page. */
router.get(`/`,function(req,res,next){
res.render('computation', { title: `f(${y}) is ${Math.round(y)}` });
res.end();
});

module.exports = router;
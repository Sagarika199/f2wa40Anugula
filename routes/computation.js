var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next) {
    var a = Math.random();
    var x;
    x = req.query.x;
    if(x==undefined)
    {
        x=a;
    }

  res.render('computation', { title: `f(${x}) is ${Math.fround(x)}` });
})

/* GET home page. */
router.get(`/`,function(req,res,next){
res.render('computation', { title: `f(${x}) is ${Math.fround(x)}` });
res.end();
});

module.exports = router;
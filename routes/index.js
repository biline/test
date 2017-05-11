var express = require('express');
var Router = express.Router;
/* GET home page. */
var router = new Router();
var defLang = require('../translations/en');

router.use(function (req, res, next) {
   var l = req.query.l || 'en';
    var translation;
    try{
        t = require('../translations/'+ l);
    }catch(e){
        t = defLang;
    }
    req.translation = t;
    req.lang = l;
    next();
});
router.get('/', function(req, res) {
 res.render('index', {t: req.translation , lang: req.lang});
});
router.get('/home', function(req, res) {
    res.render('home', {t: req.translation , lang: req.lang});
});
router.get('/aboutus', function(req, res) {
    var l = req.query.l || lang;
    res.render('aboutus',{t: req.translation.aboutus , lang: req.lang });
});
router.get('/contacts', function(req, res) {
    var l = req.query.l || lang;
    res.render('contacts',{t: req.translation.contacts , lang: req.lang });
});
router.get('/news', function(req, res) {
    var l = req.query.l || lang;
    res.render('news',{title: req.translation.underconstruction  , lang: req.lang});

    //res.render('news',{t: req.translation.news  , lang: req.lang});
});
router.get('/projects', function(req, res) {
    var l = req.query.l || lang;
    res.render('projects',{t: req.translation.projects  , lang: req.lang});
});
router.get('/services', function(req, res) {
    var l = req.query.l || lang;
    res.render('services',{t: req.translation.services  , lang: req.lang});
});
router.get('/clients', function(req, res) {
    var l = req.query.l || lang;
    res.render('clients',{title: req.translation.underconstruction  , lang: req.lang});
});


module.exports = router;

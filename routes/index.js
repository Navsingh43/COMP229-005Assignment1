var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',  
  p:"My name is Navjot Singh. I am a student of centennial college. Basically, I am from India and I have been moved to canada last year in September and I like this Country too much"
  
});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',
  na:"Navjot Singh"
    });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
  p1:"eifsgdjkfirgdbf",
  p2:"dfgdjkf",
  p3:"sdfgpsfdgf"
});
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'
});
});

router.get('/contact', function(req, res, next) {
  res.render('contact',{
    title:'Contact'
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',
  p1:"Here you can visit my profile and contact me with my information that is provided here."
});
});



module.exports = router;

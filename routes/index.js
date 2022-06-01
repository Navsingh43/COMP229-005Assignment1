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
  na:"Navjot Singh",
  pp:"Basically, I am from Punjab, India and I have been moved to Canada last year. I have done my high school education from India and pursued my further diploma in software engineering technician program in Centennial College. Currently, I am in my third semester and regarding COMM229-005, I have learned client side scripting languages like html, css, javascript in the past two semesters and in this semester I am learning how to do scripting on server side with node js. I hope after this semester I will become a full stack developer. "
    });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
  p1:"In the last semester I completed this small project that can be used as a small component to make a professional car company website. In this website I made an image gallery of the cars that the user can explore with the next and previous buttons. Without the user clicking to the next and previous buttons the images will be automatically changed and with the update button we can update the images. I have used html, css, javascript languages to create the website and a json file to import the images.",
  p2:"In the last semester, in software requirements engineering I got a project where we had to create a srs document for the new software that we want to make in the future then I came up with the idea of making the software that could helps to do online voting. Actually, during the voting days old ages people, people with disabilities face the problem because they have to go physically at the booth for the voting but this problem can be solved with the government approved voting system. So, I hope after the completion of the diploma I will get enough knowledge of software development that I can complete my project.",
  p3:"sdfgpsfdgf",
  one:"1",
  two:"2",
  three:"3"
});
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',
  p1:"I have knowledge of website development and designing so I provide the service of web designing and development at the affordable price. With the development I will also manage the website for you. So, feel free to contact me.",
  p2:"I also have some experience in software development so you can also contact me if you want to make a software for you at the appropriate price according to your budget so feel free to contact me.",
  p3:"I can also provide the service of database management. I have knowledge of php and mysql.",
  one:"1",
  two:"2",
  three:"3"
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

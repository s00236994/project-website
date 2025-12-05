
// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views', 'views');
// where to find static files - css, images, js
app.use(express.static('public'));

//Home route
app.get('/', (req, res) => {
  const state = { home: true };
  const head = {
    title: "Home",
    description: "This is the home page of Leeds United",
    keywords: "home, homepage, football, soccer, leeds united"
  };
  res.render('index', { state, head });
  console.log('home');
});

//contact route
app.get('/contactus', (req, res) => {
  const state = { contact: true };
  const head = {
    title: "Contact",
    description: "Contact us",
    keywords: "contact, email"
  };
  res.render('contactus', { state, head });
  console.log('contactus');
});

//History route
app.get('/history', (req, res) => {
  const state = { history: true };
  const head = {
    title: "History",
    description: "This is the history page of Leeds United",
    keywords: "history, football, soccer, leeds united"
  };
  res.render('history', { state, head });
  console.log('history');
});

//new shop page route
app.get('/shop', (req, res) => {
  const state = { shop: true };
  const head = {
    title: "Shop",
    description: "This is the shop page of Leeds United",
    keywords: "shop, football, soccer, leeds united"
  };
  res.render('shop', { state, head });
  console.log('shop');
});




app.get('/submission', (req, res) => {
  const comment = req.query.userComment ? req.query.userComment.replace(/\n/g, "<br/>") : "";
  
  const formDetails = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    userEmail: req.query.userEmail,
    userComment:req.query.userComment};

  res.render('submission', { formDetails });
});





// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// // load express
// const express = require('express');
// // load handlebars
// const exphbs = require('express-handlebars');

// // instantiate express
// const app = express();

// // configure express to use handlebars as templating engine
// app.engine(
//   'hbs',
//   exphbs.engine({
//     extname: '.hbs',
//     // use this layout by default - if you have different layout
//     // for say home page - you can toggle this in your code
//     defaultLayout: 'default',
//     // set location of layouts
//     layoutsDir: 'views/layouts',
//     // set location of partials - header, footer, etc
//     partialsDir: 'views/partials',
//   })
// );
// // set the view engine to handlesbards
// app.set('view engine', 'hbs');
// // where to find all of the view
// app.set('views', 'views');
// // where to find static files - css, images, js
// app.use(express.static('public'));

// // home page or home route
// app.get('/', (req, res) => {

//   // set active or not for navigation
//   state = { 'home': true, contact: false }
//   // set specifics for <head>
//   head = { 'title': "Home - Week 1" }
//   res.render('index', {
//     title: 'Home Page',
//     description: 'Welcome to my homepage',
//     page: 'home'
//   });


// });

// app.get('/history', (req, res) => {
//   res.render('history', {
//     title: 'History',
//     description: 'History of the team',
//     page: 'history'
//   });
// });



// // famousplayers route
// app.get('/famousplayers', (req, res) => {
//   res.render('famousplayers', {
//     title: 'Famous Players',
//     description: 'Famous figures of the team',
//     page: 'famousplayers'
//   });
// });

// app.get('/currentteam', (req, res) => {
//   res.render('currentteam', {
//     title: 'Current Team',
//     description: 'Meet the current team players',
//     page: 'currentteam'
//   });
// });

// // contactus route
// app.get('/contactus', (req, res) => {
//   res.render('contactus', {
//     title: 'Contact Us',
//     description: 'Get in touch with us',
//     page: 'contactus'
//   });
// });



// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// load filesystem to read JSON
const fs = require('fs');

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

//home route
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

//history route
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

// new shop page route with JSON products
app.get('/shop', (req, res) => {
  const state = { shop: true };
  const head = {
    title: "Shop",
    description: "This is the shop page of Leeds United",
    keywords: "shop, football, soccer, leeds united"
  };

  // read products.json from the data folder
const rawData = fs.readFileSync('./views/JSONdata/products.json', 'utf8');

  // convert JSON text into a js array
  const products = JSON.parse(rawData);
  console.log("Products loaded:", products);


  // send products into the template as products
  res.render('shop', { state, head, products });

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

// login page route
app.get('/login', (req, res) => {
  const state = { login: true };
  const head = {
    title: "Login",
    description: "Login to your account",
    keywords: "login, user, account"
  };
  res.render('login', { state, head }); 
});


// register page route
app.get('/register', (req, res) => {
  const state = { register: true };
  const head = {
    title: "Register",
    description: "Register your account",
    keywords: "register, user, account"
  };
  res.render('register', { state, head }); 
});

// cart page route
app.get('/cart', (req, res) => {
  const state = { cart: true };
  const head = {
    title: "Cart",
    description: "View your cart items",
    keywords: "cart, shopping, checkout"
  };
  res.render('cart', { state, head });
});

// checkout page route
app.get('/checkout', (req, res) => {
  const state = { shop: true }; 
  const head = {
    title: "Checkout",
    description: "Review your items and proceed to checkout",
    keywords: "cart, checkout, shopping"
  };
  res.render('checkout', { state, head }); 
});

// sucessful payment page route
app.get('/successful', (req, res) => {
  const state = {};
  const head = {
    title: "Payment Successful",
    description: "Your payment was successful",
    keywords: "payment, success, checkout"
  };
  res.render('successful', { state, head });
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
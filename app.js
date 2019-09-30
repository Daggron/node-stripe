const express = require('express');
const stripe = require('stripe')('sk_test_9LSYltEULf9evWIDeqUQ58tN00IEuhnt61');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const expressSession = require('express-session');

require('dotenv/config');

app.engine('handlebars',exhbs({defaultLayout: 'main'}));

app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'/public')));

app.use(expressSession({
    secret:'A keyboard , I am ironman, spiderman is back to mcu',
    saveUninitialized:true,
    resave:true
}));

app.use('/',require('./routes/main'));



const port = process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});



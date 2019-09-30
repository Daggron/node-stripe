const router = require('express').Router();
const stripe = require('stripe')('sk_test_9LSYltEULf9evWIDeqUQ58tN00IEuhnt61');

router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/charge',(req,res)=>{
    const amount = 25000
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken
    })
    .then(customer =>stripe.charges.create({
        amount,
        description:'Web Dev Ebook',
        currency :'inr',
        customer:customer.id ,

    }))
    .then(charge => res.send('Successs')); 
});



module.exports = router;
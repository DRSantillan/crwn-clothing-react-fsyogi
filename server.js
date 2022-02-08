import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve('client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('client/build', 'index.html'));
	});
}

app.post('/payment', (req, res) => {
    
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body,(stripeError, stripeRes)=>{
        if(stripeError){
            res.status(500).send({error: stripeError})
        } else {
            res.status(200).send({success: stripeRes})
        }
    })
})

app.listen(PORT, error => {
    if(error) throw error;
    console.log(`Server is running on port ${PORT}`)
})

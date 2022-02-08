import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CheckOutLogo from '../../assets/crown.svg';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_9DPDXiYATKwI8wCgykdxECiV';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then(response => {
				alert('Payment successful...');
			})
			.catch(error => {
				console.log(`Payment Error: ${error}`);
				alert('There was an issue with your payment....');
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CROWN CLOTHING LTD.'
			billingAddress
			shippingAddress
			image={CheckOutLogo}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now!'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

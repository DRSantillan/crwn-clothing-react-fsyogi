import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CheckOutLogo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_9DPDXiYATKwI8wCgykdxECiV';

	const onToken = token => {
		alert('Payment Successful...');
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

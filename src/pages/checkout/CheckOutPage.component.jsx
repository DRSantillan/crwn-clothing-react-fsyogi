import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/CheckOutItem.component';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component';
import './CheckOutPage.styles.scss'

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CheckOutItem key={cartItem.id} cartItem={cartItem} />
			))}

			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
			<StripeCheckoutButton price={total} />
			<div className='stripe-test-warning'>
				*Please use the following credit card # for test payments*
				<br />
				Card: 4242 4242 4242 4242
				<br />
				Exp: 01/24 or any future date from present date.
				<br />
				CVV: 888
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

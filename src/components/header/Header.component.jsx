import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropDown from '../cart-drowndown/CartDropDown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
	HeaderContainer,
	OptionsContainer,
	LogoContainer,
	OptionLink,
} from './Header.styled.component';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/contact'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => signOutStart()}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/registration'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropDown />}
		</HeaderContainer>
	);
};
//
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

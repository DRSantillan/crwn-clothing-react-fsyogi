import React, { Component } from 'react';
import '../containers/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/HomePage.component';
import ShopPage from '../pages/shop/ShopPage.component';
import Header from '../components/header/Header.component';
import RegistrationAuthenticationPage from '../pages/RegistrationAuthentication/RegistrationAuthenticationPage.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../redux/user/user.selectors';
import CheckoutPage from '../pages/checkout/CheckOutPage.component';
import { checkUserSession } from '../redux/user/user.actions';

class App extends Component {
	unsubscribeFromAuth = null;
	componentDidMount = () => {
		const { checkUserSession } = this.props;
		checkUserSession();
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		const { currentUser } = this.props;

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/registration'
						render={() =>
							currentUser ? (
								<Redirect to='/' />
							) : (
								<RegistrationAuthenticationPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

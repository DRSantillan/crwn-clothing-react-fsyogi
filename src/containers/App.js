import React, { Component } from 'react';
import '../containers/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/HomePage.component';
import ShopPage from '../pages/shop/ShopPage.component';
import Header from '../components/header/Header.component';
import RegistrationAuthenticationPage from '../pages/RegistrationAuthentication/RegistrationAuthenticationPage.component';
import {
	auth,
	createUserProfileDocument,
} from '../firebase/firebase.utilities';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selectors';
import CheckoutPage from '../pages/checkout/CheckOutPage.component'


class App extends Component {
	
	unsubscribeFromAuth = null;
	componentDidMount = () => {
		const { setCurrentUser } = this.props;
		// open the firebase subscription model
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
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
							this.props.currentUser ? (
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
	// collectionsArray: selectCollectionsForPreview,
});
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

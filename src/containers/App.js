import React, { Component } from 'react';
import '../containers/App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage.component';
import ShopPage from '../pages/shop/ShopPage.component';
import Header from '../components/header/Header.component';
import RegistrationAuthenticationPage from '../pages/RegistrationAuthentication/RegistrationAuthenticationPage.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utilities';
class App extends Component {
	constructor() {
		super();

		this.state = { currentUser: null };
	}
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
				// addCollectionAndDocuments(
				// 	'collections',
				// 	collectionsArray.map(({ title, items }) => ({
				// 		title,
				// 		items,
				// 	}))
				// );
			}
		});
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route
						exact
						path='/registration'
						component={RegistrationAuthenticationPage}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;

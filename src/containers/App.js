import '../containers/App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage.component';
import ShopPage from '../pages/shop/ShopPage.component';
import Header from '../components/header/Header.component';
function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;

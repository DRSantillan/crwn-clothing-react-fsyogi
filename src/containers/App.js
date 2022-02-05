import '../containers/App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/home/HomePage.component';
function App() {
	return <div>
		<Switch>
			<Route exact path='/' component={HomePage}/>
		</Switch>
	</div>;
}

export default App;

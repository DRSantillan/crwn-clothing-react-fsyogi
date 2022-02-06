import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collection-overview/CollectionOverview.component'
import CollectionsPage from '../collections/CollectionsPage.component'
import { convertCollectionsSnapShotMap} from '../../firebase/firebase.utilities'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/Spinner.component';

const CollectionsOverviewSpinner = Spinner(CollectionsOverview);
const CollectionPageSpinner = Spinner(CollectionsPage);
class ShopPage extends Component {
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render(){
		const { match, isCollectionsLoaded } = this.props;
		return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`} component={CollectionsOverview}
				render={props => (
					<CollectionsOverviewSpinner
						isLoading={isCollectionsLoaded}
						{...props}
					/>
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`} component={CollectionsPage}
				render={props => (
					<CollectionPageSpinner
						isLoading={!isCollectionsLoaded}
						{...props}
					/>
				)}
			/>
		</div>
	);
	}
	
};
const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

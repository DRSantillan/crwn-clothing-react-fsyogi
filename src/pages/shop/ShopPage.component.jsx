import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collection-overview/CollectionOverview.component'
import CollectionsPage from '../collections/CollectionsPage.component'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/Spinner.component';
import {createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewSpinner = Spinner(CollectionsOverview);
const CollectionPageSpinner = Spinner(CollectionsPage);
class ShopPage extends Component {
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render(){
		const { match, isCollectionLoaded } = this.props;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverview}
					render={props => (
						<CollectionsOverviewSpinner
							isLoading={isCollectionLoaded}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionsPage}
					render={props => (
						<CollectionPageSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
	
};
const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

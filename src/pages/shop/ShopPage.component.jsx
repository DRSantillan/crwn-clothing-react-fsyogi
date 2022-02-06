import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import CollectionsPage from '../collections/CollectionsPage.component'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/WithSpinner.component';
import {createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewSpinner = WithSpinner(CollectionsOverview);
const CollectionPageSpinner = WithSpinner(CollectionsPage);
class ShopPage extends Component {
	state = {
		loading: true
	}
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
		this.setState({loading: false})
	}

	render(){
		const { match, isCollectionLoaded } = this.props;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageSpinner
							isLoading={this.state.loading}
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

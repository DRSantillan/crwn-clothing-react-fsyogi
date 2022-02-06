import React from 'react';
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';

import CollectionsOverview from '../../components/collection-overview/CollectionOverview.component'
import CollectionsPage from '../collections/CollectionsPage.component'
const ShopPage = ({match}) => {
	
	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`} component={CollectionsOverview}
				// render={props => (
				// 	<CollectionsOverviewSpinner
				// 		isLoading={isCollectionsLoaded}
				// 		{...props}
				// 	/>
				// )}
			/>
			<Route
				path={`${match.path}/:collectionId`} component={CollectionsPage}
				// render={props => (
				// 	<CollectionPageSpinner
				// 		isLoading={!isCollectionsLoaded}
				// 		{...props}
				// 	/>
				// )}
			/>
		</div>
	);
};


export default ShopPage;

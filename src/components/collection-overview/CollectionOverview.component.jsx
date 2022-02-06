import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/CollectionPreview.component';
import './CollectionOverview.styles.scss'
const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});


export default connect(mapStateToProps)(CollectionsOverview);

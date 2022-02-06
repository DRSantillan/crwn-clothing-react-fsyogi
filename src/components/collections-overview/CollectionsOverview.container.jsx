import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/Spinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
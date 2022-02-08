import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/WithSpinner.component';

import CollectionsPage from './CollectionsPage.component';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionsPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;

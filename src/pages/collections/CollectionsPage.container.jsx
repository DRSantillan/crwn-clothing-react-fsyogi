import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import Spinner from '../../components/spinner/Spinner.component';

import CollectionsPage from './CollectionsPage.component';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionsPageContainer = compose(
	connect(mapStateToProps),
	Spinner
)(CollectionsPage);

export default CollectionsPageContainer;

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/MenuItem.component';
import './Directory.styles.scss';

const Directory = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...sectionsProps }) => (
				<MenuItem key={id} {...sectionsProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

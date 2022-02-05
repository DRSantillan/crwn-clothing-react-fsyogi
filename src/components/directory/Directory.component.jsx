import React from 'react';
import { sections } from '../../data/sections.data';

import MenuItem from '../menu-item/MenuItem.component';
import './Directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: sections,
		};

		console.log(this.state.sections);
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...sectionProps }) => (
					<MenuItem key={id} {...sectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;

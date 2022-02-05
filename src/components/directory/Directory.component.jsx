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
				{sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;

import React from 'react';

import Directory from '../../components/directory/Directory.component';
import HomePageContainer from './HomePage.styled.component';
// import './HomePage.styles.scss';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;

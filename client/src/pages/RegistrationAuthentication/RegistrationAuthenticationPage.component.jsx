import React from 'react';

import NewUserRegistration from '../../components/new-user-registration/NewUserRegistration.component'
import UserAuthentication from '../../components/user-authentication/UserAuthentication.component';

import './RegistrationAuthenticationPage.styles.scss';

const RegistrationAuthenticationPage = () => {
	return (
		<div className='registration'>
		<UserAuthentication/>
        <NewUserRegistration/>
		</div>
	);
};

export default RegistrationAuthenticationPage;

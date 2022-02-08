import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { registrationStart } from '../../redux/user/user.actions';

import './NewUserRegistration.styles.scss';

const NewUserRegistration = ({ registrationStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { displayName, email, password, confirmPassword } = userCredentials;
	const handleFormInputChange = event => {
		const { name, value } = event.target;

		setUserCredentials({...userCredentials, [name]: value });
	};

	const handleFormSubmission = async event => {
		event.preventDefault();
		

		if (password !== confirmPassword) {
			alert("passwords don't match!");
			return;
		}

		registrationStart({ displayName, email, password });
	};

	
	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account.</h2>
			<span>Sign up with your email and password.</span>
			<form className='sign-up-form' onSubmit={handleFormSubmission}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleFormInputChange}
					label='Display Name:'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleFormInputChange}
					label='Email Address:'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleFormInputChange}
					label='Password:'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleFormInputChange}
					label='Confirm Password:'
					required
				/>
				<CustomButton type='submit'>Sign Up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	registrationStart: userCredentials =>
		dispatch(registrationStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(NewUserRegistration);

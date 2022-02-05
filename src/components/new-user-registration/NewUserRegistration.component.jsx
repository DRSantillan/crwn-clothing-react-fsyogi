import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
// import CustomButton from '../CustomButton/CustomButton.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './NewUserRegistration.styles.scss';

class NewUserRegistration extends Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}
	handleFormInputChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleFormSubmission = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match!");
			return;
		}

		try {
			// const { user } = await auth.createUserWithEmailAndPassword(
			// 	email,
			// 	password
			// );
			// await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account.</h2>
				<span>Sign up with your email and password.</span>
				<form
					className='sign-up-form'
					onSubmit={this.handleFormSubmission}
				>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleFormInputChange}
						label='Display Name:'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleFormInputChange}
						label='Email Address:'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleFormInputChange}
						label='Password:'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleFormInputChange}
						label='Confirm Password:'
						required
					/>
					{/* <CustomButton type='submit'>Sign Up</CustomButton> */}
				</form>
			</div>
		);
	}
}

export default NewUserRegistration;

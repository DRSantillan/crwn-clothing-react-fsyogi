import React, { Component } from 'react';
import FormInput from '../form-input/FormInput.component';
//import CustomButton from '../custom-button/CustomButton.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './UserAuthentication.styles.scss';

class UserAuthentication extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}
	// handles the when a user logs in to site
	handleSubmitButtonEvent = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			//await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};
	// handles changes in forms its linked to
	handleChangeEvent = event => {
		const { value, name } = event.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account.</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handleSubmitButtonEvent}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChangeEvent}
						label='Email:'
						required
					/>

					<FormInput
						type='password'
						name='password'
						handleChange={this.handleChangeEvent}
						value={this.state.password}
						label='Password:'
						required
					/>
					<div className='buttons'>
						{/* <CustomButton type='submit'>Sign In</CustomButton>
						{/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton> */}
					</div>
				</form>
			</div>
		);
	}
}

export default UserAuthentication;

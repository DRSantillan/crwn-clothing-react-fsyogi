import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utilities'
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';
import './UserAuthentication.styles.scss';

const UserAuthentication = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	//
	const { email, password } = userCredentials;
	// handles the when a user logs in to site
	const handleSubmitButtonEvent = async event => {
		event.preventDefault();

		
		emailSignInStart(email, password);
	};
	// handles changes in forms its linked to
	const handleChangeEvent = event => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	
	return (
		<div className='sign-in'>
			<h2>I already have an account.</h2>
			<span>Sign in with your email and password.</span>

			<form onSubmit={handleSubmitButtonEvent}>
				<FormInput
					type='email'
					name='email'
					value={email}
					handleChange={handleChangeEvent}
					label='Email:'
					required
				/>

				<FormInput
					type='password'
					name='password'
					handleChange={handleChangeEvent}
					value={password}
					label='Password:'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};
const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(UserAuthentication);

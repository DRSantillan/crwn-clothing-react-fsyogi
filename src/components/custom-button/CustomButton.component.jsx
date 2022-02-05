
import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => {
	return (
		<CustomButton
			className={`${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-button`}
			{...otherProps}
		>
			{children}
		</CustomButton>
	);
};

export default CustomButton;


import React from 'react';

import { CustomButtonContainer } from './CustomButton.styled.component';

const CustomButton = ({children, ...props}) => {
	return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;

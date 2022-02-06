import { SpinnerContainer, SpinnerOverlay } from './Spinner.styled.component';

const Spinner = WrappedComponent => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
};

export default Spinner;

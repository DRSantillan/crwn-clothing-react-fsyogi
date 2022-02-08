export const addItemToCart = (cartItems, cartItemToAdd) => {
	// check to see if the item being added to cart already exists
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);
	// if it exists map a new object and increase the quantity by 1
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	// default return of new object if no item is found in the cart.
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			cartItem => cartItem.id !== cartItemToRemove.id
		);
	}

	return cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

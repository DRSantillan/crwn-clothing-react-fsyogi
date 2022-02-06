import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//
const config = {
	apiKey: 'AIzaSyDsg-DyBV71EV9jE8WDf3BmxSThYwzntEg',
	authDomain: 'react-store-auth-ztm.firebaseapp.com',
	projectId: 'react-store-auth-ztm',
	storageBucket: 'react-store-auth-ztm.appspot.com',
	messagingSenderId: '385761028546',
	appId: '1:385761028546:web:cf91e3010243eb1f9f4e5b',
	measurementId: 'G-D2HP4P1MKH',
};
//
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// we are calling the db to see if the user is in the db.
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	// now if it doesnt exist we create a new user document and set it
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			// set the new user document in the firestore db.
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};
export const convertCollectionsSnapShotMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};
//
firebase.initializeApp(config);
//
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

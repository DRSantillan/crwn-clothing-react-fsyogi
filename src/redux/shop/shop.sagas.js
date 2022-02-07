import { takeEvery, all, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {
	firestore,
	convertCollectionsSnapShotMap,
} from '../../firebase/firebase.utilities';
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsAsync() {
	yield console.log('I am fired');

	try {
		const collectionRef = firestore.collection('collections');
		const snapShot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapShotMap, snapShot);
		console.log(collectionsMap)
		yield put(fetchCollectionsSuccess(collectionsMap))

	} catch (error) {

		yield put(fetchCollectionsFailure(error.message))
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}


export function* shopSagas() {
	yield all([call(fetchCollectionsAsync), call(fetchCollectionsStart)])
}
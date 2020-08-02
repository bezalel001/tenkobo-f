import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBDiDRuvmlYTmlUKZqV-zokHIXkQ41o4Jo',
	authDomain: 'tenkobo-db.firebaseapp.com',
	databaseURL: 'https://tenkobo-db.firebaseio.com',
	projectId: 'tenkobo-db',
	storageBucket: 'tenkobo-db.appspot.com',
	messagingSenderId: '309389060419',
	appId: '1:309389060419:web:f6b1e45fa29e0a030f27f6',
	measurementId: 'G-0KK43D74JM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get(); // get data

	if (!snapShot.exists) {
		// if there's no data
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('Error creating data', error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log('collectionRef', collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

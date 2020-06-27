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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDB14Zc06aQIbwlKBJfwPm7kAg1suchtcA',
  authDomain: 'instagram-1980a.firebaseapp.com',
  projectId: 'instagram-1980a',
  storageBucket: 'instagram-1980a.appspot.com',
  messagingSenderId: '439611572545',
  appId: '1:439611572545:web:a72c2e897e2f7fc423a1c0'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };

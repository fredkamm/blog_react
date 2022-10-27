import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Here we import the seed file (only needed once)
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBYmnH2GS6LDV9cwD4Gc7ViCaIc4Nhwa7E',
  authDomain: 'instaclone-e748b.firebaseapp.com',
  projectId: 'instaclone-e748b',
  storageBucket: 'instaclone-e748b.appspot.com',
  messagingSenderId: '963516794874',
  appId: '1:963516794874:web:589640649e9732013ec643'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where i want to call the seed file
// seedDatabase(firebase);

export { firebase, FieldValue };

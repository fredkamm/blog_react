import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const results = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  console.log('results', results);
  return results.docs.length > 0;
}

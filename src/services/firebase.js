import { firebase, FieldValue } from '../lib/firebase';
import UserContext from '../context/user';

export async function doesUsernameExist(username) {
  const results = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return results.docs.length > 0;
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const results = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = results.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));

  return user;
}

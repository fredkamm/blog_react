import { firebase, FieldValue } from '../lib/firebase';

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

// get the suggested profiles for the user based off the users they follow
export async function getSuggestedProfiles(userId, following) {
  let query = firebase.firestore().collection('users');
  if (following.length > 0) {
    query = query.where('userId', 'not-in', [...following, userId]);
  } else {
    query = query.where('userId', '!=', userId);
  }
  const result = await query.limit(10).get();

  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }));

  return profiles;
}

// export async function updateLoggedInUserFollowing(
//   loggedInUserDocId, // currently logged in user document id
//   profileId, // the user that we requests to follow
//   isFollowingProfile // true/false (am i currently following this person?)
// ) {
//   return firebase
//     .firestore()
//     .collection('users')
//     .doc(loggedInUserDocId)
//     .update({
//       following: isFollowingProfile
//         ? FieldValue.arrayRemove(profileId)
//         : FieldValue.arrayUnion(profileId)
//     });
// }

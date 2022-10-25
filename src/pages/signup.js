import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../routes/routes';

import { doesUsernameExist } from '../services/firebase';

export default function Signup() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  //   Allowing the user to signup
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  // Error if there is an error in the signup
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  //   handles a successful signup
  const handleSignup = async (event) => {
    event.preventDefault();
    const usernameExists = await doesUsernameExist(username);

    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username
        });

        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullname,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now()
        });

        navigate(ROUTES.DASHBOARD);
      } catch (error) {
        setFullname('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setError('That username is already taken, please try another.');
    }
  };

  //   changes the tab on the browser
  useEffect(() => {
    document.title = 'Signup - Instaclone';
  }, []);

  return (
    <div className="container flex ms-auto max-w-screen items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/coverPhoto.png" alt="iPhone with Instagram app" className="max-w-full" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          <h1 className="flex justify-center w-full">
            <img src="/images/instaclone.png" alt="instaclone" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-4 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Your full name"
              className="text-sm text-gray-base w-full mr-3 py-4 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullname(target.value)}
              value={fullname}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email Address"
              className="text-sm text-gray-base w-full mr-3 py-4 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-4 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && ' opacity-50'
              }`}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Already have an account?
            {` `}
            <Link
              to={ROUTES.LOGIN}
              className="font-bold text-blue-medium flex justify-center items-center"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

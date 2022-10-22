import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  //   Allowing the user to login
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  // Error if there is an error in the login
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  //   handles a successful login
  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instaclone';
  }, []);

  return (
    <div className="container flex ms-auto max-w-screen items-center h-screen">
      <p>Login Page</p>
    </div>
  );
}

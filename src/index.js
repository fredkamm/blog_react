import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);

// Client side rendered app : react
// -> database which is firebase
// -> react-loading-skeleton
// -> tailwind css

// architecture
// src
// -> components
// -> constants
// -> context
// -> helpers
// -> hooks
// -> lib (firebase will live here)
// -> services (firebase function)
// -> styles (tailwind folder)
// -> app/tailwind

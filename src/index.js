import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
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

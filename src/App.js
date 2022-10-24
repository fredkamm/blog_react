import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './routes/routes';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading... </p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

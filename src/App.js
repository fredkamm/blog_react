import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './routes/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';
// import ProtectedRoute from './helpers/protected-route';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading... </p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<Signup />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

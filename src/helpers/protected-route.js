import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

// takes in the user that is logged in; children represent the routes; ...rest is any other prop past along
export default function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return React.cloneElement(children, { user });
        }

        if (!user) {
          return (
            <Navigate
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired
};

import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../hooks/UseFirebase';


const PrivateRoute = (props) => {
    const {children,...rest}=props;
    const {user}=useFirebase();
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
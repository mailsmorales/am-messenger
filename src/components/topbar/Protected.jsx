import React, {useContext} from 'react';
import { UserAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/register' />;
  }

  return children;
};

export default Protected;


{/* <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/register" />
      }
    /> */}
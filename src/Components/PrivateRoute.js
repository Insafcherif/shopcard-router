import React from 'react';
import {Navigate} from 'react-router-dom';

function PrivateRoute({children, user}) {
  return (
     <div>{user.connect ? children :<Navigate to="/SignIn"/> }</div>
  )
}

export default PrivateRoute
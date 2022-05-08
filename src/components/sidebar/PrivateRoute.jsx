// import React, {useContext} from "react";
// import { Route } from "react-router-dom";
// import { UserAuth } from '../../context/AuthContext';
// import {Redirect,Route} from 'react-router-dom'


// const PrivateRoute = ({ component: Component, ...rest}) => {
//     const { user } = UserAuth();

//     return (
//         <Route
//         {...rest}
//         exact
//         render={(props) =>
//           user ? <Component {...props} /> : <Redirect to="/register" />
//         }
//       />
//     )
// }

// export default PrivateRoute;
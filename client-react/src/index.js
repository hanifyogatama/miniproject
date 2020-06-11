import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Verification from './screens/Verification.jsx'
import VerifSuccess from './screens/VerifSuccess'
import Private from './screens/Private.jsx';
import Admin from './screens/Admin.jsx';
import Reset from './screens/Reset'
import ForgetPassword from './screens/ForgetPassword.jsx';
import ForgetSuccess  from './screens/ForgetSuccess'
import ResetPassword from './screens/ResetPassword.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
import UpdateDonasi from './screens/UpdateDonasi.jsx';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/forgetsuccess' exact render={props => <ForgetSuccess {...props} />} />
      <Route path='/users/Verification' exact render={props => <Verification {...props} />} />
      <Route path='/users/VerifSuccess' exact render={props => <VerifSuccess {...props} />} />
      <Route path='/users/ProgramDonasi/UpdateDonasi' exact render={props => <UpdateDonasi {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/Reset' exact render={props => <Reset {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <PrivateRoute path="/private" exact component={Private} />
       <AdminRoute path="/admin" exact component={Admin} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

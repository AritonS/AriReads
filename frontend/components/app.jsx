import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import SplashContainer from './splash/splash_container'
import LoginContainer from './session/login_container';
import LogoutContainer from './session/logout_container';

const App = () => {
    return (
    <div>
        <h1 id='app-title'>AriReads</h1>
        <Switch>
            <AuthRoute path='/' component={SplashContainer}/>
            <Route path='/signup' component={SignupContainer}/>
            <AuthRoute path='/login' component={LoginContainer}/>
        </Switch>
            <ProtectedRoute path='/' component={LogoutContainer}/>
    </div>
    )
}

export default App;
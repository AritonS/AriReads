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

const App = () => {
    return (
    <div>
        <h1>AriReads</h1>
        <Switch>
            <AuthRoute path='/' component={SplashContainer}/>
            <Route path='/signup' component={SignupContainer}/>
        </Switch>
    </div>
    )
}

export default App;
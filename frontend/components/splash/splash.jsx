import React from 'react';
import SignupContainer from '../../components/session/signup_container'
import LoginContainer from '../../components/session/login_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SignupContainer/>
                <LoginContainer/>
            </div>
        )
    }
}

export default Splash;
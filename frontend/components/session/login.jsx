import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        {<Redirect to={`/user/${currentUser.id}`}/>}
    }

    render() {
        return(
            <div className='session-form'>
                <h2>Login</h2>
                <form>
                    <label>
                        <input type="text"
                        placeholder='Username'
                        onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>
                        <input 
                        placeholder='Password'
                        type="password"
                        onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
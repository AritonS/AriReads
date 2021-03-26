import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
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
        this.props.createNewUser(this.state)
    }

    render() {
        return(
            <div className='session-form'>
                <h2>Sign Up</h2>
                <form>
                    <label>
                        <input 
                        type="text" 
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleInput('username')}/>
                    </label>
                    <label>
                        <input 
                        type="text"
                        placeholder='E-mail'
                        value={this.state.email}
                        onChange={this.handleInput('email')}/>
                    </label>
                    <label>
                        <input 
                        placeholder='Password'
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleInput('password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;
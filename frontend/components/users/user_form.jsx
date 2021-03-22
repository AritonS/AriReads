import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.action(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit()}>
                <label>Username
                    <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </label>
                <label>Email
                    <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                </label>
                <label>Password
                    <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                </label>
                <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}


export default UserForm;
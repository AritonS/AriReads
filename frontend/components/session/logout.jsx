import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {
        return(
            <div>
                <button onClick={this.handleSubmit}>Logout</button>
            </div>
        )
    }
}

export default Logout;
import React from 'react';
import {Link} from 'react-router-dom';

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        const { user } = this.props
        return (
            <div>
                <h1>{user.username}</h1>
                <p>{user.email}</p>
                <Link to='/'>Index</Link>
            </div>
        )
    }
}

export default UserShow;
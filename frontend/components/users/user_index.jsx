import React from 'react';
import UserIndexItem from './user_index_item';
import CreateUserFormContainer from './create_user_form_container';

class UserIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { users, deleteUser } = this.props;
        return (
            <div>
                <ul>
                    {
                        users.map(user => <UserIndexItem user={user} deleteUser={deleteUser} key={user.id}/>)
                    }
                </ul>
                <CreateUserFormContainer/>
            </div>
        )
    }
}

export default UserIndex;
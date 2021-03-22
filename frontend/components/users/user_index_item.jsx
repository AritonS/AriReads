import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../util/user_api_util';

const UserIndexItem = (props) => {
    return (
        <li>
            <Link to={`/users/${props.user.id}`}>{props.user.username}</Link>
            <Link to={`/users/${props.user.id}/edit`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}></button>
        </li>
    )
}

export default UserIndexItem;
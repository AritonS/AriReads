import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchUsers, deleteUser } from '../../actions/user_actions';

const mSTP = state => ({
    users: Object.values(state.users)
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: userId => dispatch(deleteUser(userId))
})

export default connect(mSTP, mDTP)(UserIndex);
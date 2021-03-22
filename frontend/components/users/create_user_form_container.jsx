import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserForm from './user_form';
import createUser from '../../actions/user_actions';

const mSTP = state => ({
    user: {
        username: '',
        email: '',
        password: '',
    },
    formType: 'Create User'
})

const mDTP = dispatch => ({
    action: user => dispatch(createUser(user))
})

export default connect(mSTP, mDTP)(UserForm)
import { connect } from 'react-redux';
import { createNewUser, login, logout } from '../../actions/session'
import Splash from './splash'

const mDTP = dispatch => ({
    createNewUser: (user) => dispatch(createNewUser(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
})

export default connect(null, mDTP)(Splash)
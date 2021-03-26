import { connect } from "react-redux"
import Logout from './logout'
import {logout} from '../../actions/session'

const mDTP = dispatch => ({
    logout: formUser => dispatch(logout())
})

export default connect(null, mDTP)(Logout)
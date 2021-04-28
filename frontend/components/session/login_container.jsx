import {connect} from 'react-redux';
import {login} from '../../actions/session';
import Login from './login';

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser))
})

// const mapStateToProps = dispatch => ({
//     currentUser: 
// })

export default connect(null, mapDispatchToProps)(Login)
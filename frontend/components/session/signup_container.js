import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// const mapStateToProps = (state, ownProps) => {
//     return {
//         errors: state.errors.session,
//     };
// };

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
})

export default connect(null, mapDispatchToProps)(Signup);
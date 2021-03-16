import { createStore, applyMiddelware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer'
import thunk from '../thunk/thunk'

export default (preloadedState = {}) => createStore(
    rootReducer, preloadedState,
    composeWithDevTools(applyMiddelware(thunk, logger))
)
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
})

window.postUser = SessionApiUtil.postUser
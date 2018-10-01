import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from './containers/TodoContainer';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <TodoContainer />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

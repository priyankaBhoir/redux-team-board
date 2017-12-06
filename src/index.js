/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App/App';
import {getState, setState} from './utils/localstorage';
import configureStore from './stores/configureStore';

import './reset.css';
import './index.css';

const persistedState = getState();

const store = configureStore(persistedState);

store.subscribe(() => {
  setState({
    team: store.getState().team
  })
})

ReactDOM.render(
  <Router>
    <App store={store}/>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
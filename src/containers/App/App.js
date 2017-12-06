import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Team from '../Team/Team'
import Sidebar from '../Sidebar/Sidebar'

import './App.css';

const BoardLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="board-layout">
        <Sidebar {...matchProps} />
        <div className="board-content"> 
          <Component {...matchProps} />
        </div>
      </div>
    )} />
  )
};


const App = ({ store }) => (
  <Provider store={store}>
    <div className="app-container">
      <Switch>
        <BoardLayout exact={true} path="/" component={Home} />
        <BoardLayout path="/team" component={Team} />
      </Switch>
    </div>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}
export default App;

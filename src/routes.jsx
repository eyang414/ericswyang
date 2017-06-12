import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import App from './App'
import NotFound from './components/NotFound'
import IntroDeploy from './components/IntroDeploy'
import ResumeDeploy from './components/ResumeDeploy'

const Routes = (props) => (
  <Provider store={store}>
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={IntroDeploy} />
        <Route path="/resume" component={ResumeDeploy} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
)

export default Routes

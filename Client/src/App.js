import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { isAuthenticated } from './services/Authentication.services'
import store from './store/store'
import MainPage from './pages/main.page'
import Library from './pages/library.page'
import LoginPage from './pages/login.page'
import RegisterPage from './pages/register.page'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Component {...props} {...rest} />
    )
  )} />
)

const NonAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    ) : (
      <Component {...props} {...rest} />
    )
  )} />
)

class App extends Component {
  render () {
    return (
      <Router>
        <Provider store={store}>
          <div className='App'>
            <PublicRoute exact path='/library' component={Library} />
            <NonAuthenticatedRoute path='/login' component={LoginPage} />
            <NonAuthenticatedRoute path='/register' component={RegisterPage} />
            <PublicRoute exact path='/' component={MainPage} />
            <PrivateRoute exact path='/bleh' component={MainPage} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App

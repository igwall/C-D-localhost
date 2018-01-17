import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { isAuthenticated } from './services/Authentication.services'
import { isAdminAuthenticated } from './services/AdminAuthentication.services'
import store from './store/store'
import MainPage from './pages/main.page'
import Library from './pages/library.page'
import LoginPage from './pages/login.page'
import RegisterPage from './pages/register.page'
import ProfilePage from './pages/profile.page'
import AdminPage from './pages/admin.page'
import AdminLoginPage from './pages/admin_login.page'

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAdminAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/admin/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

const AdminNonAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAdminAuthenticated() ? (
      <Redirect to={{
        pathname: '/admin',
        state: { from: props.location }
      }} />
    ) : (
      <Component {...props} {...rest} />
    )
  )} />
)

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
            <PublicRoute exact path='/' component={MainPage} />
            <PublicRoute exact path='/library' component={Library} />
            <NonAuthenticatedRoute path='/login' component={LoginPage} />
            <NonAuthenticatedRoute path='/register' component={RegisterPage} />
            <PublicRoute path='/user/:userId' component={ProfilePage} />
            <PrivateRoute exact path='/bleh' component={MainPage} />
            <AdminRoute exact path='/admin' component={AdminPage} />
            <AdminNonAuthenticatedRoute path='/admin/login' component={AdminLoginPage} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App

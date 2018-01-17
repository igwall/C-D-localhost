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
import AboutPage from './pages/about.page'
import ContactPage from './pages/contact.page'
import GuestBookPage from './pages/guestbook.page'
import CollaborationPage from './pages/collaboration.page'
import RecipesPage from './pages/recipes.page'

// You have to be authenticated as an Admin
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

// You can't access if you're already authenticated as an Admin
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

// You have to be authenticated as a User
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

// Anyone can access
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Component {...props} {...rest} />
    )
  )} />
)

// You can't access if you're already authenticated as a User
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
            <PublicRoute exact path='/about' component={AboutPage} />
            <PublicRoute exact path='/guestbook' component={GuestBookPage} />
            <PublicRoute exact path='/contact' component={ContactPage} />
            <PublicRoute exact path='/recipes' component={RecipesPage} />
            <PublicRoute path='/user/:userId' component={ProfilePage} />

            <NonAuthenticatedRoute path='/login' component={LoginPage} />
            <NonAuthenticatedRoute path='/register' component={RegisterPage} />

            <PrivateRoute exact path='/collaboration' component={CollaborationPage} />

            <AdminNonAuthenticatedRoute path='/admin/login' component={AdminLoginPage} />

            <AdminRoute exact path='/admin' component={AdminPage} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App

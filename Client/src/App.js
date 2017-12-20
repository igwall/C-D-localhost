import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { isAuthenticated } from './services/Authentication.services'
import store from './store/store'
import MainPage from './pages/main.page'
import RecipePage from './pages/recipe.page'

const i = 1

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    i > 1 ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

class App extends Component {
  render () {
    return (
      <Router>
        <Provider store={store}>
          <div className='App'>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/recipes' component={RecipePage} />
            <PrivateRoute exact path='/bite' component={MainPage} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App

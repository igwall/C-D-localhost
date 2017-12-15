import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      {
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }
    )
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
)

export const defaultCurrentUserState = {
  username: '',
  name: '',
  picture: '',
  bio: '',
  teams: []
}

export const defaultFetchedUserState = {
  fetching: false,
  fetched: false,
  error: null,
  user: {
    _id: '',
    provider: '',
    username: '',
    name: '',
    picture: '',
    bio: '',
    teams: [],
    boards: [],
    modifications: []
  }
}

export const defaultNotificationsState = {
  elements: []
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultFetchedUserState, defaultNotificationsState)
export default createStore(reducer, { ...defaultState }, enhancer)

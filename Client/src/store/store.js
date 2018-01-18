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
  currentUser: {
    username: '',
    realisations: [],
    email: '',
    picture: '',
    collaborator: '',
    comments: []
  }
}

export const defaultRoomsState = {
  rooms: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultMaterialsState = {
  materials: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultRecipesState = {
  recipes: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultCollaboratorsState = {
  collaborators: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultFetchedUserState = {
  userFetched: {
    fetching: false,
    fetched: false,
    error: null,
    user: {
      _id: '',
      username: '',
      realisations: [],
      email: '',
      picture: '',
      collaborator: '',
      comments: []
    }
  }
}

export const defaultNotificationsState = {
  notifications: {
    elements: []
  }
}

export const defaultAdministratorsState = {
  administrators: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultFetchedUserState, defaultRoomsState, defaultNotificationsState, defaultMaterialsState, defaultCollaboratorsState, defaultRecipesState, defaultAdministratorsState)
export default createStore(reducer, { ...defaultState }, enhancer)

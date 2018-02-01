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
    collaborationRequest: '',
    comments: []
  }
}

export const defaultCurrentCollaboratorState = {
  currentCollaborator: {
    firstname: '',
    lastname: '',
    recipes: [],
    picture: '',
    bio: '',
    description: '',
    video: '',
    link: '',
    user: ''
  }
}

export const defaultCurrentAdminState = {
  currentAdmin: {
    username: '',
    role: ''
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

export const defaultQuotesState = {
  quotes: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultReferencesState = {
  references: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultHotVideosState = {
  hotVideos: {
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

export const defaultCollaborationRequestsState = {
  collaborationRequests: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultArtistState = {
  artistFetched: {
    fetching: false,
    fetched: false,
    error: null,
    artist: {
      _id: '',
      firstName: '',
      lastName: '',
      bio: '',
      videos: [],
      pictures: [],
      profilPicture: '',
      audio: ''
    }
  }
}

export const defaultRecipeState = {
  recipeFetched: {
    fetching: false,
    fetched: false,
    error: null,
    recipe: {
      _id: '',
      title: '',
      thumbnail: '',
      description: '',
      pictures: [],
      videos: [],
      audios: [],
      author: '',
      createdAt: '',
      materials: [],
      rooms: [],
      number: ''

    }
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

export const defaultMailState = {
  mails: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultCommentsState = {
  comments: {
    fetching: false,
    fetched: false,
    error: null,
    elements: []
  }
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultFetchedUserState, defaultRoomsState, defaultNotificationsState, defaultMaterialsState, defaultCollaboratorsState, defaultRecipesState, defaultAdministratorsState, defaultArtistState, defaultCollaborationRequestsState, defaultCurrentAdminState, defaultQuotesState, defaultReferencesState, defaultHotVideosState, defaultMailState, defaultCommentsState, defaultCurrentCollaboratorState, defaultRecipeState)
export default createStore(reducer, { ...defaultState }, enhancer)

import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import notifications from './notifications.reducer'
import userFetched from './userFetched.reducer'
import rooms from './rooms.reducer'
import materials from './materials.reducer'
import collaborators from './collaborators.reducer'
import recipes from './recipes.reducer'
import administrators from './administrators.reducer'
import artistFetched from './artist.reducer'
import collaborationRequests from './collaborationRequests.reducer'

export default combineReducers({
  currentUser,
  userFetched,
  rooms,
  notifications,
  materials,
  collaborators,
  recipes,
  administrators,
  artistFetched,
  collaborationRequests
})

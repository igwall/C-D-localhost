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
import currentAdmin from './currentAdmin.reducer'
import currentCollaborator from './currentCollaborator.reducer'
import quotes from './quotes.reducer'
import references from './references.reducer'
import hotVideos from './hotVideos.reducer'
import recipeFetched from './currentRecipe.reducer'
import mails from './mail.reducer'
import comments from './comment.reducer'

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
  collaborationRequests,
  currentAdmin,
  quotes,
  references,
  hotVideos,
  recipeFetched,
  currentCollaborator,
  mails,
  comments
})

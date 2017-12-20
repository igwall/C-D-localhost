import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import notifications from './notifications.reducer'
import userFetched from './userFetched.reducer'

export default combineReducers({
  currentUser,
  userFetched,
  notifications
})

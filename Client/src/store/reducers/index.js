import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import notifications from './notifications.reducer'
import userFetched from './userFetched.reducer'
import rooms from './rooms.reducer'

export default combineReducers({
  currentUser,
  userFetched,
  rooms,
  notifications
})

import axios from 'axios'
import Config from '../config'
import { setConnectedUser } from '../store/actions/user.action'

export function storeToken (token) {
  window.localStorage.setItem('hut_access_token', token)
}

export function extractToken () {
  return window.localStorage.getItem('hut_access_token')
}

export function setProfile (forced = false) {
  if (profileIsInLocalStorage() && !forced) {
    setConnectedUser(loadProfileFromLocalStorage())
  } else {
    fetchProfile().then(profile => {
      setConnectedUser(profile)
      storeProfileLocalStorage(profile)
    })
  }
}

export function updateProfileLocalStorage (profile) {
  storeProfileLocalStorage(profile)
}

export function isAuthenticated () {
  if (window.localStorage.getItem('hut_access_token') !== undefined &&
    window.localStorage.getItem('hut_access_token') !== null) {
    setTokenHeader()
    return true
  } else {
    unsetTokenHeader()
    return false
  }
}

export function isAuthenticatedSimple () {
  if (window.localStorage.getItem('hut_access_token') !== undefined &&
  window.localStorage.getItem('hut_access_token') !== null) {
    setProfile()
    return true
  } else {
    unsetTokenHeader()
    return false
  }
}

export function setTokenHeader () {
  axios.defaults.headers.common['authorization'] = null
  axios.defaults.headers.common['authorization'] = `Bearer ${extractToken()}`
}
export function unsetTokenHeader () {
  axios.defaults.headers.common['authorization'] = null
}

export function removeToken () {
  window.localStorage.removeItem('hut_access_token')
}

export function logout () {
  removeToken()
  deleteProfileLocalStorage()
  window.location = '/'
}

export function login (email, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/login`, {
      email: email,
      password: password
    })
      .then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
  })
}

export function register (name, email, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/register`, {
      email: email,
      username: name,
      password: password
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

const loadProfileFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('hut_profile'))
}

const storeProfileLocalStorage = (profile) => {
  window.localStorage.setItem('hut_profile', JSON.stringify(profile))
}

const deleteProfileLocalStorage = () => {
  window.localStorage.removeItem('hut_profile')
}

const profileIsInLocalStorage = () => (
  window.localStorage.getItem('hut_profile') !== undefined &&
  window.localStorage.getItem('hut_profile') !== null
)

const fetchProfile = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/me/`).then(res => {
      resolve(res.data)
    })
  })
}

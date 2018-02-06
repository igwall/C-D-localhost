import axios from 'axios'
import Config from '../config'
import { setConnectedAdmin } from '../store/actions/administrators.action'

export function storeAdminToken (token) {
  window.localStorage.setItem('hut_admin_access_token', token)
}

export function extractAdminToken () {
  return window.localStorage.getItem('hut_admin_access_token')
}

export function isAdminAuthenticated () {
  if (window.localStorage.getItem('hut_admin_access_token') !== undefined &&
    window.localStorage.getItem('hut_admin_access_token') !== null) {
    setAdminTokenHeader()
    setAdminProfile()
    return true
  } else {
    return false
  }
}

export function setAdminProfile (forced = false) {
  if (profileIsInLocalStorage() && !forced) {
    setConnectedAdmin(loadProfileFromLocalStorage())
  } else {
    fetchAdminProfile().then(profile => {
      setConnectedAdmin(profile)
      storeAdminProfileLocalStorage(profile)
    })
  }
}

export function setAdminTokenHeader () {
  axios.defaults.headers.common['authorization'] = null
  axios.defaults.headers.common['authorization'] = `Bearer ${extractAdminToken()}`
}
export function unsetAdminTokenHeader () {
  axios.defaults.headers.common['authorization'] = null
}

export function removeAdminToken () {
  window.localStorage.removeItem('hut_admin_access_token')
}

export function adminLogout () {
  removeAdminToken()
  deleteAdminProfileLocalStorage()
  window.location = '/admin/login'
}

const loadProfileFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('hut_admin_profile'))
}

const storeAdminProfileLocalStorage = (profile) => {
  window.localStorage.setItem('hut_admin_profile', JSON.stringify(profile))
}

const deleteAdminProfileLocalStorage = () => {
  window.localStorage.removeItem('hut_admin_profile')
}

const profileIsInLocalStorage = () => (
  window.localStorage.getItem('hut_admin_profile') !== undefined &&
  window.localStorage.getItem('hut_admin_profile') !== null
)

export function adminLogin (username, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/admin/login`, {
      username: username,
      password: password
    })
      .then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
  })
}

export function adminRegister (username, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/admin/register`, {
      username: username,
      password: password
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

const fetchAdminProfile = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/admins/me/`).then(res => {
      resolve(res.data)
    })
  })
}

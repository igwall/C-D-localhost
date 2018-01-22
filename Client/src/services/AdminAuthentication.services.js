import axios from 'axios'
import Config from '../config'

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
    return true
  } else {
    unsetAdminTokenHeader()
    return false
  }
}

export function setAdminTokenHeader () {
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
  window.location = '/admin/login'
}

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

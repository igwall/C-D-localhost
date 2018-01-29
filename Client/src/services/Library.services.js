import Config from '../config'
import axios from 'axios'

export function fetchReferences () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/references`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function addReferenceDistant (quote) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/references`, {
      ...quote
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteReferenceDistant (referenceId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/references/${referenceId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function fetchHotVideos () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/hotvideos`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function addHotVideoDistant (hotVideo) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/hotvideos`, {
      ...hotVideo
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteHotVideoDistant (hotVideoId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/hotvideos/${hotVideoId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

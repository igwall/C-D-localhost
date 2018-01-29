import Config from '../config'
import axios from 'axios'

export function fetchQuotes () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/quotes`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function addQuoteDistant (quote) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/quotes`, {
      ...quote
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteQuoteDistant (quoteId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/quotes/${quoteId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

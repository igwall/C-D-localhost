import { fetchQuotes, addQuoteDistant, deleteQuoteDistant } from '../../services/Quote.services'

import store from '../store'

export function setQuotes (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_QUOTES_START'})
    fetchQuotes().then((data) => {
      store.dispatch({
        type: 'FETCH_QUOTES_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_QUOTES_ERROR',
        payload: err
      })
    })
  })
}

export function addQuote (quote) {
  return new Promise((resolve, reject) => {
    addQuoteDistant(quote).then((data) => {
      store.dispatch({
        type: 'NEW_QUOTE',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteQuote (quoteId) {
  return new Promise((resolve, reject) => {
    deleteQuoteDistant(quoteId).then((data) => {
      store.dispatch({
        type: 'DELETE_QUOTE',
        payload: quoteId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

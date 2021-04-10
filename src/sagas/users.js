import { call, put } from 'redux-saga/effects'

import { USERS_ACTION_TYPES } from '../actions/users'
import api from './../services/api'

export function * fetchUsers () {
  yield put({ type: USERS_ACTION_TYPES.FETCH_USERS_LOADING })
  const response = yield call(api.fetchGithubUsers)
  if (response && response.ok) {
    yield put({ type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, users: response.data })
  } else {
    yield put({ type: USERS_ACTION_TYPES.FETCH_USERS_ERROR })
  }
}

export function * searchUsers ({ searchText = '' }) {
  yield put({ type: USERS_ACTION_TYPES.FETCH_USERS_LOADING })
  if (searchText.length < 1) {
    yield call(fetchUsers)
  } else {
    const response = yield call(api.searchGithubUsers, searchText)
    if (response && response.ok) {
      yield put({ type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS, users: response.data.items })
    } else {
      yield put({ type: USERS_ACTION_TYPES.FETCH_USERS_ERROR })
    }
  }
}

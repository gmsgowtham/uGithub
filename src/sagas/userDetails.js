import { call, put } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from '../actions/userDetails'
import api from '../services/api'

export function * fetchUser ({ userId }) {
  yield put({ type: USER_ACTION_TYPES.FETCH_USER_LOADING })
  const response = yield call(api.getUserInfo, userId)
  if (response && response.ok) {
    yield put({ type: USER_ACTION_TYPES.FETCH_USER_SUCCESS, user: response.data })
  } else {
    yield put({ type: USER_ACTION_TYPES.FETCH_USER_ERROR })
  }
}

export function * fetchUserRepos ({ userId }) {
  yield put({ type: USER_ACTION_TYPES.FETCH_REPOS_LOADING })
  const response = yield call(api.getUserRepos, userId)
  if (response && response.ok) {
    yield put({ type: USER_ACTION_TYPES.FETCH_REPOS_SUCCESS, repos: response.data })
  } else {
    yield put({ type: USER_ACTION_TYPES.FETCH_REPOS_ERROR })
  }
}

export function * fetchUserGists ({ userId }) {
  yield put({ type: USER_ACTION_TYPES.FETCH_GISTS_LOADING })
  const response = yield call(api.getUserGists, userId)
  if (response && response.ok) {
    yield put({ type: USER_ACTION_TYPES.FETCH_GISTS_SUCCESS, gists: response.data })
  } else {
    yield put({ type: USER_ACTION_TYPES.FETCH_GISTS_ERROR })
  }
}

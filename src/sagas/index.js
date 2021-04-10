import { all, takeLatest } from 'redux-saga/effects'

import { fetchUsers, searchUsers } from './users'
import { USERS_ACTION_TYPES } from '../actions/users'

import { fetchUser, fetchUserRepos, fetchUserGists } from './userDetails'
import { USER_ACTION_TYPES } from '../actions/userDetails'

export default function * rootSaga () {
  yield all([
    takeLatest(USERS_ACTION_TYPES.FETCH_USERS, fetchUsers),
    takeLatest(USERS_ACTION_TYPES.SEARCH_USERS, searchUsers),
    takeLatest(USER_ACTION_TYPES.FETCH_USER, fetchUser),
    takeLatest(USER_ACTION_TYPES.FETCH_REPOS, fetchUserRepos),
    takeLatest(USER_ACTION_TYPES.FETCH_GISTS, fetchUserGists)
  ])
}

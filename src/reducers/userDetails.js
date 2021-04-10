import { USER_ACTION_TYPES } from '../actions/userDetails'

const INITIAL_STATE = {
  user: {},
  userInfoloading: false,
  repos: [],
  reposLoading: false,
  gists: [],
  gistsLoading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.FETCH_USER_LOADING:
      return { ...state, loading: true }
    case USER_ACTION_TYPES.FETCH_USER_SUCCESS:
      return { ...state, user: action.user, userInfoloading: false }
    case USER_ACTION_TYPES.FETCH_REPOS_LOADING:
      return { ...state, reposLoading: true }
    case USER_ACTION_TYPES.FETCH_REPOS_SUCCESS:
      return { ...state, repos: action.repos, reposLoading: false }
    case USER_ACTION_TYPES.FETCH_GISTS_LOADING:
      return { ...state, gistsLoading: true }
    case USER_ACTION_TYPES.FETCH_GISTS_SUCCESS:
      return { ...state, gists: action.gists, gistsLoading: false }
    default:
      return state
  }
}

export default userReducer

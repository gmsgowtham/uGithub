import { USERS_ACTION_TYPES } from './../actions/users'

const INITIAL_STATE = {
  users: [],
  loading: false,
  searchText: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.FETCH_USERS_LOADING:
      return { ...state, loading: true }
    case USERS_ACTION_TYPES.FETCH_USERS_SUCCESS:
      return { ...state, users: action.users, loading: false }
    default:
      return state
  }
}

export default userReducer

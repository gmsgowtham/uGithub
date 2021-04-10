export const USERS_ACTION_TYPES = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
  FETCH_USERS_LOADING: 'FETCH_USERS_LOADING',
  SEARCH_USERS: 'SEARCH_USERS'
}

export const fetchUsersSuccess = (users) => {
  return {
    type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsers = () => {
  return {
    type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS
  }
}

export const fetchUsersLoading = () => {
  return {
    type: USERS_ACTION_TYPES.FETCH_USERS_LOADING
  }
}

export const fetchUsersError = () => {
  return {
    type: USERS_ACTION_TYPES.FETCH_USERS_ERROR
  }
}

export const searchUsers = (searchText) => {
  return {
    type: USERS_ACTION_TYPES.SEARCH_USERS,
    searchText: searchText
  }
}

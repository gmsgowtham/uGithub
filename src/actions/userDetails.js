export const USER_ACTION_TYPES = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR',
  FETCH_USER_LOADING: 'FETCH_USER_LOADING',
  FETCH_REPOS: 'FETCH_REPOS',
  FETCH_REPOS_SUCCESS: 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_ERROR: 'FETCH_REPOS_ERROR',
  FETCH_REPOS_LOADING: 'FETCH_REPOS_LOADING',
  FETCH_GISTS: 'FETCH_GISTS',
  FETCH_GISTS_SUCCESS: 'FETCH_GISTS_SUCCESS',
  FETCH_GISTS_ERROR: 'FETCH_GISTS_ERROR',
  FETCH_GISTS_LOADING: 'FETCH_GISTS_LOADING'
}

export const fetchUsersSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_SUCCESS,
    payload: user
  }
}

export const fetchUsers = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_SUCCESS
  }
}

export const fetchUsersLoading = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_LOADING
  }
}

export const fetchUsersError = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_ERROR
  }
}

export const fetchReposSuccess = (repos) => {
  return {
    type: USER_ACTION_TYPES.FETCH_REPOS_SUCCESS,
    payload: repos
  }
}

export const fetchRepos = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_REPOS_SUCCESS
  }
}

export const fetchReposLoading = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_REPOS_LOADING
  }
}

export const fetchReposError = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_REPOS_ERROR
  }
}

export const fetchGistsSuccess = (gists) => {
  return {
    type: USER_ACTION_TYPES.FETCH_GISTS_SUCCESS,
    payload: gists
  }
}

export const fetchGists = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_GISTS_SUCCESS
  }
}

export const fetchGistsLoading = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_GISTS_LOADING
  }
}

export const fetchGistsError = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_GISTS_ERROR
  }
}

import { create } from 'apisauce'

const api = create({
  baseURL: 'https://api.github.com'
})

const fetchGithubUsers = () => api.get('/users')

const searchGithubUsers = (searchText) => api.get(`/search/users?q=${searchText}`)

const getUserInfo = (userId) => api.get(`/users/${userId}`)

const getUserRepos = (userId) => api.get(`/users/${userId}/repos`)
const getUserGists = (userId) => api.get(`/users/${userId}/gists`)

export default {
  fetchGithubUsers,
  searchGithubUsers,
  getUserInfo,
  getUserRepos,
  getUserGists
}

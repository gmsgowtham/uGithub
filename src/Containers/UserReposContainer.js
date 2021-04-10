import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { List } from 'react-native-paper'

import { USER_ACTION_TYPES } from './../actions/userDetails'

const UserReposContainer = ({ userId, fetchRepos, repos = [] }) => {
  useEffect(() => {
    fetchRepos(userId)
  }, [])

  return (
    <List.Section title="Repos">
      {repos.map((repo, index) => {
        return (
          <>
          <List.Accordion
            key={index.toString()}
            title={repo.full_name}
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item key={'description'} title="Description" description={repo.description} />
            <List.Item key={'stars'} title="Stars" description={repo.stargazers_count} />
            <List.Item key={'issues'} title="Issues" description={repo.open_issues} />
            <List.Item key={'pull-requests'} title="Pull requests" description={repo.open_issues} />
            <List.Item key={'homepage'} title="Homepage" description={repo.homepage} />
          </List.Accordion>
          </>
        )
      })}
    </List.Section>
  )
}

const mapStateToProps = (state) => {
  const { userDetails = {} } = state
  return {
    repos: userDetails.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: (userId) => dispatch({ type: USER_ACTION_TYPES.FETCH_REPOS, userId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReposContainer)

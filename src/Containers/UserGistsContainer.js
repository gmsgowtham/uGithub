import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { List } from 'react-native-paper'

import { USER_ACTION_TYPES } from './../actions/userDetails'

const UserGistsContainer = ({ userId, fetchGists, gists = [] }) => {
  useEffect(() => {
    fetchGists(userId)
  }, [])

  return (
    <List.Section title="Gists">
      {gists.map((gist, index) => {
        return (
          <>
          <List.Accordion
            key={index.toString()}
            title={gist.url}
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item key={'desc'} title="Description" description={gist.description} />
            <List.Item key={'comments'} title="Comments" description={gist.comments || '0'} />
            <List.Item key={'url'} title="URL" description={gist.html_url} />
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
    gists: userDetails.gists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGists: (userId) => dispatch({ type: USER_ACTION_TYPES.FETCH_GISTS, userId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGistsContainer)

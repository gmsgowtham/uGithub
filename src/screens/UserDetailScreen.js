import React from 'react'
import { ScrollView } from 'react-native'
import UserInfoContainer from '../Containers/UserInfoContainer'
import UserReposContainer from '../Containers/UserReposContainer'
import UserGistsContainer from '../Containers/UserGistsContainer'

const UserDetailScreen = (props) => {
  const userId = props.route.params.userId
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <UserInfoContainer userId={userId}/>
      <UserReposContainer userId={userId}/>
      <UserGistsContainer userId={userId}/>
    </ScrollView>
  )
}

export default UserDetailScreen

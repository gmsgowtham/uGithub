import * as React from 'react'
import { Avatar, Card } from 'react-native-paper'

const CardAvatar = props => <Avatar.Image size={40} source={{ uri: props.uri }} />

const UserInfoCard = ({ user = {} }) => {
  if (!user.login) return null
  return (
  <Card>
    <Card.Title title={user.name || user.login} subtitle={user.html_url} left={() => <CardAvatar uri={user.avatar_url}/>} />
  </Card>
  )
}

export default UserInfoCard

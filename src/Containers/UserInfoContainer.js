import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'

import { USER_ACTION_TYPES } from './../actions/userDetails'
import UserInfoCard from './../components/UserInfoCard'

const UserInfoContainer = ({ fetchUserInfo, loading, user = {}, userId = '' }) => {
  useEffect(() => {
    fetchUserInfo(userId)
  }, [])

  if (loading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator animating={true} color={Colors.blue800} size={'large'} />
      </View>
    )
  }
  return (
    <View>
      <UserInfoCard user={user}/>
    </View>
  )
}

const mapStateToProps = (state) => {
  const { userDetails = {} } = state
  return {
    user: userDetails.user,
    loading: userDetails.userInfoloading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (userId) => dispatch({ type: USER_ACTION_TYPES.FETCH_USER, userId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)

import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper'
import { connect } from 'react-redux'

import { USERS_ACTION_TYPES } from './../actions/users'
import UserInfoCard from './../components/UserInfoCard'
import { debounce } from './../utils'

const HomeScreen = ({ fetchUsers, loading, users = [], searchUsers, navigation }) => {
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    fetchUsers()
  }, [])

  const onUserClick = (user) => {
    navigation.navigate('User', { userId: user.login })
  }

  const onSearchInputChange = (value) => {
    setSearchText(value)
    searchUsers(value)
  }

  return (
    <>
      <View style={{ backgroundColor: '#f5f5f5', padding: 8 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onSearchInputChange}
          iconColor={Colors.blue800}
          value={searchText}
        />
      </View>
      {
        loading
          ? (
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator animating={true} color={Colors.blue800} size={'large'} />
              </View>
            )
          : (
              <FlatList
                data={users}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={item.key}
                    onPress={() => onUserClick(item)}
                  >
                    <UserInfoCard key={index.toString()} user={item}/>
                  </TouchableOpacity>
                )}
              />
            )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  const { users } = state
  return {
    users: users.users,
    loading: users.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch({ type: USERS_ACTION_TYPES.FETCH_USERS }),
    searchUsers: debounce((q) => dispatch({ type: USERS_ACTION_TYPES.SEARCH_USERS, searchText: q }), 400)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

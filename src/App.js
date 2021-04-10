import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import UserDetailScreen from './screens/UserDetailScreen'

const { Navigator, Screen } = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} options={{ title: 'GitHub Users' }}></Screen>
        <Screen name="User" component={UserDetailScreen} options={{ title: 'User' }}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

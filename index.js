import * as React from 'react'
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'

import store from './src/store/createStore'
import App from './src/App'
import { name as appName } from './app.json'

const root = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
)

AppRegistry.registerComponent(appName, () => root)

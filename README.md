# uGithub

A small and simple example app for exploring github user details.


## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native.
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.
Follow instructions for your given `development OS` and `target OS`.

### Android

- only the first time you run the project, you need to generate a `debug key` with:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `npx react-native start` to start the metro bundler, in a dedicated terminal
- `npx react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `npx react-native start` to start the metro bundler, in a dedicated terminal
- `npx react-native run-android` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Debug
1. Run `npx react-native link react-native-vector-icons` if icons are not loading.

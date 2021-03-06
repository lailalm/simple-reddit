# Up/Down with React Native

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

![Alt Text](https://media.giphy.com/media/26gN2oGjNXxn8QVXi/giphy.gif)
![Alt Text](https://media.giphy.com/media/3oFzmaZck0fRexItMY/giphy.gif)

This is one of the example to build an offline Reddit-Like with limited functionality. This project only covers the frontend side, without any connection to backend.

My assumption is the initial state will have 3 topics.

You can run this project through:
- Expo Client:
  - Download Expo in your iOS/Android
  - Simply scanning the barcode in https://expo.io/@lailalm/simple-reddit
  - Or enter a project url `exp.host/@lailalm/simple-reddit`

Or you can simply follow [these steps](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) to build the .apk or .ipa (but you need to configure some).

First thing after downloading/forking this repo you have to:


`cd simple-reddit`

then

`npm install` or `yarn install`


## Table of Contents
* [Requirements](#requirements)
* [Default Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)
  * [yarn test](#npm-test)
  * [yarn run ios](#npm-run-ios)
  * [yarn run android](#npm-run-android)
  * [yarn run eject](#npm-run-eject)
* [My Additional Packages/Scripts](#additional-packages)
  * [Conventions](#convention)
  * [yarn lint](#lint)
  * [yarn watch:lint](#watch-lint)
* [Functionality](#functionality)
* [Contact](#contact)

## Requirements
You better have installed:
- Node
  - I'm using the v9.4.0
- Yarn
  - I'm using 1.3.2
- Expo
  - If you want to build it into your apps. Check it [here](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html).
- Expo Client for iOS/Android
  - If you want to run this project in your phone


## Default Available Scripts

#### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn run ios` / `yarn start` then press `i`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`  / `yarn start` then press `a`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `yarn run eject`

This will start the process of "ejecting" from Create React Native App's build scripts.

## My Additional Packages/Scripts
I'm using:
- Redux (redux, react-redux, etc)
- React Navigation (react-navigation)
- React Native Elements (react-native-elements)
- Jest and Enzyme
- Babel (babel, babel-jest, babel-plugin-module-alias, etc)
- Eslint (for linter)

#### Conventions
I'm using babel and eslint. The settings are available in:
- [.babelrc](https://github.com/lailalm/simple-reddit/blob/master/.babelrc)
- [.eslintrc.json](https://github.com/lailalm/simple-reddit/blob/master/.eslintrc.json)

Also for testing. I'm using [jest](https://facebook.github.io/jest/) and [enzyme](http://airbnb.io/enzyme/). With the setup in [setupTest.js](https://github.com/lailalm/simple-reddit/blob/master/setupTest.js)

#### `yarn lint`
Runs and check the linter of your code.

#### `yarn watch:lint`
Basically kind of the same with `yarn lint` but with additional watch and auto fix.

## Functionality
- [x] Maintain a list of topics and its upvotes/downvotes
- [x] Allow the user to submit topics. With limited string that does not exceed 255 characters
- [x] Always show a list of top 20 topics (sorted by upvotes, descending. If the upvotes have same value, it will be sorted by downvotes, increasing)
- [x] Generate/Add 10 or 20 new generated random topics
- [x] Clear all the topics


## Contact
Should you have any problem with running/building/installing this, do not hesitate to contact me through this github or `laila.mauhibah@gmail.com`

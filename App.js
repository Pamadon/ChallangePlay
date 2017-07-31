import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Expo, { Notifications } from 'expo';
import firebase from 'firebase';
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import ActiveGameScreen from './screens/ActiveGameScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import GamesScreen from './screens/GamesScreen';
import HomeScreen from './screens/HomeScreen';
import CreateGameScreen from './screens/CreateGameScreen'

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCo57R34PN_rw0uh9bNUVhHh-1OoETtj7M",
      authDomain: "react-native1.firebaseapp.com",
      databaseURL: "https://react-native1.firebaseio.com",
      projectId: "react-native1",
      storageBucket: "react-native1.appspot.com",
      messagingSenderId: "140527701429"
    });
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }

      });
    }

  render() {
     const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: SignUpScreen},
      main: {
        screen: TabNavigator({
          home: {screen: HomeScreen},
          CreateGame: { screen: CreateGameScreen},
          stats: { screen: StatisticsScreen},
          activegames: { screen: ActiveGameScreen}
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
    });
    return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

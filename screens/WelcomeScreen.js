
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Play', color: '#03A9F4' },
  { text: 'Use this Play and Track your games', color: '#009688' },
  { text: 'Set your location, then Play!', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

	onSignUp = () => {
			this.props.navigation.navigate('auth');
	};

  render() {


    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSignUp} />
    );
  }
}

export default WelcomeScreen;

import expo from 'expo';
import React, { Component } from 'react'
import { View, Text,Alert } from 'react-native';
import { Button } from 'react-native-elements';
import LoginForm from '../components/LoginForm'
import { Header, Card, CardItem } from '../components/common';
import FacebookButton from '../components/FacebookButton';
import firebase from 'firebase';

class SignUpScreen extends Component {
	state ={ token: null}

	if (token) {
		this.props.navigation.navigate('main')
	}

	authenticate = (token) => {
     const provider = firebase.auth.FacebookAuthProvider
     const credential = provider.credential(token)
     return firebase.auth().signInWithCredential(credential)
  }

	login = async () => {
		const ADD_ID = 'YOUR FACEBOOK APP ID'
		const options = {
			permissions: ['public_profile', 'email', 'user_friends'],
		}
		const {type, token} = await expo.Facebook.logInWithReadPermissionsAsync('', options)
		if (type === 'success') {
			const response = await fetch(`https://graph.facebook.com/me?fields=email,name,friends&access_token=${token}`)
			const name = 'Peter'

			this.authenticate(token)
			firebase.database().ref('users/' + 'Al1jx9pzBPYBGTeyn0643G4AZ7v2').set({
		    name: name

		  });
			this.props.navigation.navigate('main');
		}
	}

	render() {
		return (
			<View>
				<Card>
				<Header headerText="LOGIN OR SIGNUP WITH PLAY" />
				<LoginForm />
				<FacebookButton onPress={this.login} />
				</Card>
			</View>
		);
	}
}

const styles = {
	buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
}

export default SignUpScreen;

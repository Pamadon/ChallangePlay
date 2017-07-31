import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardItem, Input, Spinner} from './common';
import firebase from 'firebase';


class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false }

	onButtonPress() {
		const { email, password } = this.state;


		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
					});
	}

	onLoginFail(){
		this.setState({error: 'Authentication failed.', loading: false})
}

	onLoginSuccess(props) {
		this.setState({
		email: '',
		password: '',
		error: '',
		loading: false
		});

}

	renderButton() {
		if (this.state.loading){
			return <Spinner size="small" />
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
						Login!
					</Button>
		);
	}


	render() {
		return (
			<Card>
				<CardItem>
					<Input
						label='Email'
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
						placeholder="user@gmail.com"
					/>
				</CardItem>
				<CardItem>
					<Input
						secureTextEntry
						placeholder="password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						label='Password'
					/>
				</CardItem>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardItem>
					{this.renderButton()}
				</CardItem>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'

	}
}


export default LoginForm;


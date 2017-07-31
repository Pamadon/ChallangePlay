import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, CardItem, Input, Button } from '../components/common';
import firebase from 'firebase';


class CreateGameScreen extends Component {
	state = { gameType: '', gameTime: '', gameLocation: ''}

	onButtonPress() {
	const { gameType, gameTime, gameLocation } = this.state



	}

	renderButton() {
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
						Create Game!!
					</Button>
		);
	}

	render() {
		return (
			<View>
				<Header headerText="Create a game" />

					<CardItem>
						<Input
							value={this.state.gameType}
							label="Game Type"
							onChangeText={gameType => this.setState({ gameType })}
						 />
					</CardItem>
					<CardItem>
						<Input
							value={this.state.gameTime}
							label="Game Time"
							onChangeText={gameTime => this.setState({ gameTime })}
						 />
					</CardItem>
					<CardItem>
						<Input
							value={this.state.gameLocation}
							label="Game Location"
							onChangeText={gameLocation => this.setState({ gameLocation })}
						 />
					</CardItem>
					<CardItem>
						{this.renderButton()}
					</CardItem>
			</View>
		);
	}
}

export default CreateGameScreen;

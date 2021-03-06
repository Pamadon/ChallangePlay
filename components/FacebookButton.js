import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
} from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

class FacebookButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
                <View style={styles.btnContainer}>
                    <Icon name={'facebook-f'} size={50} color={'white'} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    btn: {
        paddingTop: 5,
        height: 70,
        width: 70,
        backgroundColor: '#3b5998',
        borderRadius: 50,
    },
    btnContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default FacebookButton;

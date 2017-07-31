import {
	FIREBASE_LOGIN_SUCCESS,
	FIREBASE_LOGIN_FAIL
} from '../actions/types';

export default function(state = {}, action ) {
	switch (action.type) {
		case FIREBASE_LOGIN_SUCCESS:
			return { token: action.payload};
		case FIREBASE_LOGIN_FAIL:
			return { token: null};
		default:
			return state;
	}
}

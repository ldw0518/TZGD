import { combineReducers } from 'redux';

const username = (state='11', action) => {
	switch(action.type) {
		case 'SIGNIN' :
			return action.username;
		default:
			return state;
	}
};

const page = (state='0', action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return action.page;
		default:
			return state;
	}
}






export default combineReducers({
	username,
	page
});
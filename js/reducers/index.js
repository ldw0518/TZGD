import { combineReducers } from 'redux';

const id = (state='111', action) => {
	switch(action.type) {
		case 'SIGNIN' :
			return action.id;
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
const error = (state='none', action) => {
	switch (action.type) {
		case 'ERROR':
			return action.e;
		default:
			return state;
	}
}
const empty = (state='empty', action) => {
	switch (action.type) {
		case 'EMPTY':
			return action.e;
		default:
			return state; 
	}
}





export default combineReducers({
	id,
	page,
	error,
	empty,
});
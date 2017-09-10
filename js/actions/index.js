const signin = (id) => {
	return {
		type: 'SIGNIN',
		id
	};
};

const setPage = (page) => {
	return {
		type: 'SET_PAGE',
		page
	};
};

const error = (e) => {
	return {
		type: 'ERROR',
		e
	};
};
const empty = (e) => {
	return {
		type: 'EMPTY',
		e
	};
};










export {
	signin,
	setPage,
	error,
	empty,
};
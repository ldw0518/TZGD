const signin = (username) => {
	return {
		type: 'SIGNIN',
		username
	};
};

const setPage = (page) => {
	return {
		type: 'SET_PAGE',
		page
	};
};












export {
	signin,
	setPage,
};
import React from 'react';

import RadiusInput from '../page/sign/RadiusInput';
import RaisedButton from 'material-ui/RaisedButton';
import {pink50} from 'material-ui/styles/colors';

class SubHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: []
		}
	}

	render() {
		return (
			<div style={styles.sub}>
				<div>
					<img style={styles.logo} 
							 src="./images/logo.png" alt="logo"/>
				</div>
				<div style={styles.search}>
					<RadiusInput placeholder="请输入商品名称或ID"/>
					<RaisedButton label="搜索" style={styles.button} 
												backgroundColor="#FCE4EC"/>
				</div>
			</div>
		)
	}
}

const styles = {
	sub: {
		width: 1290,
		height: 160,
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	logo: {
		width: 200,
		height: 120
	},
	button: {
		margin: 12
	},
	search: {
		display: 'flex',
		justifyContent: 'center',
	}
}
export default SubHeader;

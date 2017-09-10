import React from 'react';
import Form from './Form';


class Sign extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<div>
					<video style={styles.background} autoPlay loop >
						<source src="./img/background5.mp4" type="video/mp4" />
					</video>
					
				</div>
				<div style={styles.form}>						
					<Form />					
				</div>
			</div>
			) 
	}
}
const styles = {
	container: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: window.innerHeight,
    width: window.innerWidth
  },
	background: {
		position: 'fixed',
		left: 0, 
		top: '-10%',

  	minWidth: '100%', 
  	// minHeight: '100%',

  	// // width: 'auto', 
  	// // height: 'auto', 
  	// Width: '100%', 
  	// Height: '100%',
  	// height: window.innerHeight,
   //  width: window.innerWidth,
  	zIndex: -100,

  // background: url(polina.jpg) no-repeat;

  	backgroundSize: 'cover'
	},
	form: {
		display: 'flex',
		position: 'fixed',
		left: 0, 
		top: 0,
		width: '100%', 
  	height: '100%',
  	backgroundColor: '#000',
  	// opacity: 0.6,
  	background: 'hsla(0, 0%, 100%, 0.3)',
  	justifyContent: 'center',
  	alignItems: 'center',
	}
}
export default Sign;
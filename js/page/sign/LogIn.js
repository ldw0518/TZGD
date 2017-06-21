import React from 'react';
// import RadiusInput from './RadiusInput';
import {teal300} from 'material-ui/styles/colors';

const assign = Object.assign;

class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      color: 'white',
      value: '',
    };
    // this.handleClick0 = this.handleClick0.bind(this);
    // // this.handleClick1 = this.handleClick1.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
	}
	componentWillReceiveProps(nextProps) {
    if (nextProps.warning !== this.props.warning) {
      if (nextProps.warning !== false){
        this.setState({color: '#FF5722'});
      } else {
        this.setState({color: 'white'});
      }
    }
  }
  // handleClick(n) {
		
  // }
  // handleClick0() {
  //   if (this.Input0 !== null) {
  //     this.Input0.focus();
  //   }
  //   this.setState({color: teal300});
  //   this.props.switchWarning();
  // }
  // handleClick1() {
  //   if (this.Input1 !== null) {
  //     this.Input1.focus();
  //   }
  //   this.setState({color: teal300});
  //   this.props.switchWarning();
  // }
  // // handleClick(n) {
  // //   if (this.Input1 !== null && this.Input0 !== null) {
  // //   switch(n) {
  // //   	case '0': this.Input0.focus();
  // //   		break;
  // //   	case '1': this.Input1.focus();
  // //   		break;
  // //   }
  // // }
  //   this.setState({color: teal300});
  //   this.props.switchWarning();
  // }
  handleBlur() {
    this.setState({color: 'white'});
    // this.props.getValue(this.state.value);
  }
	
	render() {

		return (
			<div>
				<div style={styles.container(this.state.color)}
             >
					<input 
						type="text"
						placeholder="学号"
						onChange={this.props.updateUsername}
						style={styles.input}
						ref={(ref) => this.Input0 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
				<div style={styles.container(this.state.color)}
        		 >
					<input 
						type="password"
						placeholder="密码"
						onChange={this.props.updatePassword}
						style={styles.input}
						ref={(ref) => this.Input1 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
			</div>)
	}
}
const styles = {
  container: (bc) => ({
    width: 300,
    height: 26,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 26,
    borderColor: bc,
    backgroundColor: "transparent",

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  input: {
    backgroundColor: "transparent",
    border: 'none',
    color: 'white',
    height: 30,
    width: 260,
    fontSize: 18,
  },
};
export default LogIn;
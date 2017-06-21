import React from 'react';
import {teal300} from 'material-ui/styles/colors';
class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      color: 'white',
      value: '',
    };
	}
	render() {
		return (
			<div>
				<div style={styles.container(this.state.color)}
             >
					<input 
						type="text"
						placeholder="请输入你的学号"
						onChange={this.props.updateUsername}
						style={styles.input}
						ref={(ref) => this.Input0 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
				<div style={styles.container(this.state.color)}
        		 >
					<input 
						type="text"
						placeholder="给自己起个昵称吧"
						onChange={this.props.updatePassword}
						style={styles.input}
						ref={(ref) => this.Input1 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
				<div style={styles.container(this.state.color)}
        		 >
					<input 
						type="password"
						placeholder="请输入登陆密码"
						onChange={this.props.updatePassword}
						style={styles.input}
						ref={(ref) => this.Input1 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
				<div style={styles.container(this.state.color)}
        		 >
					<input 
						type="password"
						placeholder="请再输入一次密码"
						onChange={this.props.updatePassword}
						style={styles.input}
						ref={(ref) => this.Input1 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
				<div style={styles.container(this.state.color)}
        		 >
					<input 
						type="text"
						placeholder="请你的输入手机号"
						onChange={this.props.updatePassword}
						style={styles.input}
						ref={(ref) => this.Input1 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
				<div style={styles.container(this.state.color)}
        		 >
					<input 
						type="text"
						placeholder="请输入你的QQ号"
						onChange={this.props.updatePassword}
						style={styles.input}
						ref={(ref) => this.Input1 = ref}
						onBlur={this.handleBlur}
					/>
				</div>
			</div>
    )
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
export default Register;
import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../../actions';

import {teal500} from 'material-ui/styles/colors';
import RadiusInput from './RadiusInput';

class LogIn1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: true,
      username: '',
      password: '',
      // warning: false,
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.switchSign = this.switchSign.bind(this);
    // this.handleTouchTap = this.handleTouchTap.bind(this);
    this.switchWarning = this.switchWarning.bind(this);
  }
	handleUsername(value) {
    this.setState({username: value});
    // alert(this.state.username);
  }

  handlePassword(value) {
    this.setState({password: value});
    // alert(this.state.password);
  }

  switchSign(signin) {
    this.setState({isSignin: signin});
  }
  switchWarning() {
    this.setState({warning: false});
  }

  render() {
    const state = this.state,
          isSignin = state.isSignin;
    return (
      <div style={styles.container}>
        <RadiusInput
          placeholder="学号"
          warning={this.props.warning}
          switchWarning={this.switchWarning}
          getValue={this.props.getUsername}/>
        <RadiusInput
          placeholder="密码"
          type="password"
          warning={this.props.warning}
          switchWarning={this.switchWarning}
          getValue={this.props.getPassword}/>
  
      </div>
    );

  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    width: 320,
    height: 46,
    borderRadius: 32,
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => {
      dispatch(signin(username));
    }
  };
};

export default connect(null, mapDispatchToProps)(LogIn1);











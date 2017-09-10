import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../../actions';

import {teal500} from 'material-ui/styles/colors';
import RadiusInput from './RadiusInput';

class LogIn1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
    this.handleId = this.handleId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.switchSign = this.switchSign.bind(this);
    // this.handleTouchTap = this.handleTouchTap.bind(this);
    // this.switchWarning = this.switchWarning.bind(this);
  }
	handleId(value) {
    this.setState({id: value});
    // alert(this.state.Id);
  }

  handlePassword(value) {
    this.setState({password: value});
    // alert(this.state.password);
  }

  switchSign(signin) {
    this.setState({isSignin: signin});
  }
  // switchWarning() {
  //   this.setState({warning: false});
  // }

  render() {
    const state = this.state;
    return (
      <div style={styles.container}>
        <RadiusInput
          placeholder="学号"
          switchWarning={this.switchWarning}
          getValue={this.props.getId}
       
          setIdCheck={this.props.setIdCheck}/>
    
        <span style={styles.idCheck(this.props.idCheck)}>此学号尚未注册</span>
        <RadiusInput
          placeholder="密码"
          type="password"
          getValue={this.props.getPassword}
          setPasswordCheck={this.props.setPasswordCheck}/>
        <span style={styles.passwordCheck(this.props.passwordCheck)}>密码输入错误</span>
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
  // submit: {
  //   width: 320,
  //   height: 46,
  //   borderRadius: 32,
  // },
  // id: {
  //   display: 'inline'
  // }
  idCheck: (idCheck) => ({
    display: idCheck,
    color: 'red'

  }),
  passwordCheck: (passwordCheck) => ({
    display: passwordCheck,
    color: 'red'
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => {
      dispatch(signin(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(LogIn1);











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

  }
	handleId(value) {
    this.setState({id: value});
  }

  handlePassword(value) {
    this.setState({password: value});
  }

  switchSign(signin) {
    this.setState({isSignin: signin});
  }

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











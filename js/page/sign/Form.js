import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../../actions';

import RaisedButton from 'material-ui/RaisedButton';
import {teal500} from 'material-ui/styles/colors';
// import RadiusInput from './RadiusInput';
import LogIn from './LogIn1';
import Link from './Link';
import Register from './Register';

const assign = Object.assign;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: true,
      username: '',
      password: '',
      warning: false
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.switchSign = this.switchSign.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.switchWarning = this.switchWarning.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
    // this.handleChangeUsername = this.handleChangeUsername.bind(this);
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
  page() {
    switch(this.props.page) {
      case '0': return <LogIn 
                              warning={this.state.warning}
                             
                              switchWarning={this.switchWarning}
                              waring={this.state.waring} 
                              getUsername={this.handleUsername}
                              getPassword={this.handlePassword}/>;
      case '1': return <Register />;
      default: return <LogIn />;
    }
  }
  // handleChangeUsername(event) {
  //   this.setState({username: event.target.value});
  //   alert(this.state.username);
  // }
  // handleChangePassword(event) {
  //   this.setState({password: event.target.value});
  // }

  handleTouchTap(event) {
    const username = this.state.username,
          password = this.state.password,
          isSignin = this.state.isSignin;

    fetch("/Asign", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `username=${username}&password=${password}&isSignin=${isSignin}`
    }).then((res) => {
      if (res.ok) {
        this.props.setUsername(username);
        window.history.back(-1);
      } else if (res.status == 401) {
        this.setState({warning: true});
      }
    }, (e) => {
      console.log("连接失败！");
    });
  }

  switchWarning() {
    this.setState({warning: false});
  }

  render() {
    const state = this.state,
          isSignin = state.isSignin;
    return (
      <div style={styles.main}>
        <div style={styles.Logo}>
          <img src="./img/logo1.jpg" alt="logo" style={styles.logo}/>
        </div>
      <div style={styles.container}>
        
       
        {this.page()}
        <RaisedButton
          label={isSignin ? '登录' : '注册'}
          labelStyle={{fontSize: 20}}
          primary={true}
          onTouchTap={this.handleTouchTap}
          style={assign({margin: 10}, styles.submit) }
          buttonStyle={assign({backgroundColor: teal500}, styles.submit)}
          overlayStyle={styles.submit}/>
        <br/>
        <Link
          isSignin={isSignin}
          switchSign={(s) => this.setState({isSignin: s})}
          />
      </div>
    </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  submit: {
    width: 320,
    height: 46,
    borderRadius: 32,
  },
  main: {
    display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    
    // opacity: 0.8,
  },
  Logo: {
    paddingRight: '15%'
  },
  logo: {
    width: 600,
    height: 300,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => {
      dispatch(signin(username));
    }
  };
};
const mapStateToProps = (state) => {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

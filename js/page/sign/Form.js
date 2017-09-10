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
      id: '',
      password: '',
      ensurePassword: '',
      username: '',
      tel: '',
      qq: '',

      idCheck: 'none',
      passwordCheck: 'none',

    };

    this.handleId = this.handleId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.switchSign = this.switchSign.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.setIdCheck = this.setIdCheck.bind(this);
    this.setPasswordCheck = this.setPasswordCheck.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleTel = this.handleTel.bind(this);
    this.handleQQ = this.handleQQ.bind(this);
  }

  handleId(value) {
    this.setState({id: value});
    // alert(this.state.Id);
  }

  handlePassword(value) {
    this.setState({password: value});
    // alert(this.state.password);
  }

  handleUsername(value) {
  	this.setState({username: value});
  }

  handleTel(value) {
  	this.setState({tel: value});
  }

  handleQQ(value) {
  	this.setState({qq: value});
  }


  switchSign(signin) {
    this.setState({isSignin: signin});
    // alert("111");
  }
  page() {
    switch(this.props.page) {
      case '0': return <LogIn getId={this.handleId}
                              getPassword={this.handlePassword}
                              idCheck={this.state.idCheck}
                              passwordCheck={this.state.passwordCheck} 

                              setIdCheck={this.setIdCheck}
                              setPasswordCheck={this.setPasswordCheck}/>;
      case '1': return <Register getId={this.handleId}
      													 getPassword={this.handlePassword}
      													 getUsername={this.handleUsername}
      													 getTel={this.handleTel}
      													 getQQ={this.handleQQ}
      													 />;
      default: return <LogIn />;
    }
  }

  handleTouchTap(event) {
    const id = this.state.id,
          password = this.state.password,
          username = this.state.username,
          tel = this.state.tel,
          qq = this.state.qq,
          isSignin = this.state.isSignin;
    if(isSignin) {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `id=${id}&pwd=${password}`
      }).then((res) => {
        if (res.ok) {
          this.props.setId(id);
          window.history.back(-1);
        } else if (res.status == 400) {
          this.setState({
            idCheck: 'inline',
          });
        } else if (res.status == 403) {
          this.setState({
            passwordCheck: 'inline',
          })
        }
      }, (e) => {
        console.log("连接失败！");
      });
    } else {
    	if(this.props.error != 'none') {
    		alert('请正确填写信息！');
    	} else if(this.props.empty != 'none') {
    		alert('请填写全部信息！');
    	} else {
      	fetch("/signup", {
      	  method: "POST",
      	  headers: {
      	    "Content-Type": "application/x-www-form-urlencoded"
      	  },
      	  body: `id=${id}&pwd=${password}&name=${username}&link=手机号:${tel};QQ:${qq}`
      	}).then((res) => {
      	  if (res.ok) {
      	    location.reload();
      	  } 
      	}, (e) => {
      	  console.log("连接失败！");
      	});
    	}
  	}
  }

  setIdCheck() {
    this.setState({
      idCheck: 'none',
    })
  }
  setPasswordCheck() {
    this.setState({
      passwordCheck: 'none',
    })
  }

  render() {
    const state = this.state,
          isSignin = state.isSignin;
    return (
      <div style={styles.main}>
        <div style={styles.Logo}>
           
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
    setId: (id) => {
      dispatch(signin(id));
    }
  };
};
const mapStateToProps = (state) => {
  return {
    page: state.page,
    error: state.error,
    empty: state.empty
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

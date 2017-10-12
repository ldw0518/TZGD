import React from 'react';
import {connect} from 'react-redux';
import {error, empty} from '../../actions';

import {teal500} from 'material-ui/styles/colors';
import RadiusInput from './RadiusInput';


class Register extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      ensurePassword: '',
      username: '',
      tel: '',
      qq: '',   

      idError: 'none',
      idCheck: 'none',

      usernameError: 'none',
      usernameCheck: 'none',

      passwordError: 'none',
      passwordCheck: 'none',

      linkCheck: 'none',
      telCheck: 'none',
    };
    this.idCheck = this.idCheck.bind(this);
    this.getId = this.getId.bind(this);

    this.getUsername = this.getUsername.bind(this);
    this.usernameCheck = this.usernameCheck.bind(this);
    
    this.getPassword = this.getPassword.bind(this);
    this.getEnsurePassword = this.getEnsurePassword.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.ensurePwdCheck = this.ensurePwdCheck.bind(this);
    
    this.getTel = this.getTel.bind(this);
    this.getQQ = this.getQQ.bind(this);
    this.linkCheck = this.linkCheck.bind(this);
    
    this.setIdCheck = this.setIdCheck.bind(this);
    this.setUsernameCheck = this.setUsernameCheck.bind(this);
		this.setPwdCheck = this.setPwdCheck.bind(this);
		this.setLinkCheck = this.setLinkCheck.bind(this);
  }

  componentDidUpdate() {
  	if(this.state.idError == 'none' &&
       this.state.idCheck == 'none' && 
       this.state.usernameError == 'none' &&
       this.state.usernameCheck == 'none' && 
       this.state.passwordError == 'none' &&
       this.state.passwordCheck == 'none' && 
       this.state.linkCheck == 'none' &&
       this.state.telCheck == 'none') {
			this.props.setError('none');
  	}
  	if(this.state.id != '' &&
       this.state.password != '' &&
       this.state.ensurePassword != '' &&
       this.state.username != '' &&
       (this.state.tel != '' || this.state.qq != '')) {
  		this.props.setEmpty('none');
  	}
  }
  getId(value) {
  	this.setState({
  		id: value
  	})
  }

  idCheck() {
		const id = this.state.id;
		if(id.length != 10) {
			this.setState({
				idError: 'inline'
			});
			this.props.setError('warning');			
		} else if(id.length == 10) {
			if(isNaN(id)) {
				this.setState({
					idError: 'inline',
				});
				this.props.setError('warning');
			} else {
				this.setState({
					idError: 'none'
				});
				fetch("/idcheck", {
					method: "POST",
      			headers: {
      			  "Content-Type": "application/x-www-form-urlencoded"
      			},
      			body: `id=${id}`
				}).then((res) => {
					if(res.ok) {
						this.setState({
							idCheck: 'none',
						});
					} else if(res.status == 400) {
						this.setState({
      		    	idCheck: 'inline',
      		  });
						this.props.setError('warning');
					}
				}, (e) => {
					console.log("连接失败！");
					});
			}		
		}		
  }
  setIdCheck() {
  	this.setState({
  		idError: 'none',
      idCheck: 'none',
  	});
  }

  getUsername(value) {
  	this.setState({
  		username: value
  	})
  }
	
	usernameCheck() {
		const username = this.state.username;
		var len = 0;  
  	for (var i=0; i<username.length; i++) {  
  	  if (username.charCodeAt(i)>127 || username.charCodeAt(i)==94) {  
  	     len += 2;  
  	   } else {  
  	     len ++;  
  	   }  
  	}

  	if(len > 20 || len == 0) {
  		this.setState({
  			usernameError: 'inline',
  		});
  		this.props.setError('warning');
  	} else {
  		this.setState({
					idError: 'none'
				});
			fetch("/namecheck", {
				method: "POST",
        credentials: "same-origin",
      		headers: {
      		  "Content-Type": "application/x-www-form-urlencoded"
      		},
      		body: `name=${username}`
			}).then((res) => {
				if(res.ok) {
					this.setState({
						usernameCheck: 'none',
					});
				} else if(res.status == 401) {
					this.setState({
      	    	usernameCheck: 'inline',
      	  });
      	  this.props.setError('warning');
				}
			}, (e) => {
				console.log("连接失败！");
				});		
  	}		
  }
  setUsernameCheck() {
  	this.setState({
  		usernameError: 'none',
      usernameCheck: 'none',
  	});
  }

  getPassword(value) {
  	this.setState({
  		password: value
  	})
  }

  getEnsurePassword(value) {
		this.setState({
  		ensurePassword: value
  	})
  }
	passwordCheck() {
		var password = this.state.password;
		var ensurePassword = this.state.ensurePassword;
		if(password.length < 6 || password.length > 16) {
			this.setState({
  			passwordError: 'inline',
  		});
  		this.props.setError('warning');
		} 
	}
	setPwdCheck() {
		this.setState({
			passwordError: 'none',
		});
	}
	ensurePwdCheck() {
		var password = this.state.password;
		var ensurePassword = this.state.ensurePassword;
		if(password !== ensurePassword && ensurePassword.length != 0) {
			this.setState({
  			passwordCheck: 'inline',
  		});
  		this.props.setError('warning');
		} else {
			this.setState({
				passwordCheck: 'none',
			});
		}
	}

	getTel(value) {
		this.setState({
			tel: value
		})
	}
	getQQ(value) {
		this.setState({
			qq: value
		})
	}
	telCheck() {
		var tel = this.state.tel;
		if(tel.length !== 11 && tel.length > 0) {
			this.setState({
				telCheck: 'inline'
			});
			this.props.setError('warning');
		}
	}
	linkCheck() {
		var tel = this.state.tel;
		var qq = this.state.qq;
		if(tel.length == 0 && qq.length == 0) {
			this.setState({
				linkCheck: 'inline'
			});
			this.props.setError('warning');
		}
	}
	setLinkCheck() {
		this.setState({
			linkCheck: 'none'
		});
	}
	



  render() {
    const state = this.state;
    return (
      <div style={styles.container}>
        <RadiusInput
          placeholder="请输入你的学号"
          getValue={this.props.getId}
          getState={this.getId}     
          idCheck={this.idCheck}
          setIdCheck={this.setIdCheck}
        />
        <span style={styles.error(this.state.idError)}>请输入正确的学号</span>    
        <span style={styles.error(this.state.idCheck)}>此学号已被注册</span>
        
        <RadiusInput
          placeholder="给自己起个昵称吧"
          getValue={this.props.getUsername}
          getState={this.getUsername}
          usernameCheck={this.usernameCheck}
          setUsernameCheck={this.setUsernameCheck}
        /> 
        <span style={styles.error(this.state.usernameError)}>昵称限制1-20个字符</span> 
        <span style={styles.error(this.state.usernameCheck)}>此昵称已被占用</span>       
        
        <RadiusInput
          placeholder="请输入密码"
          type="password"
          getValue={this.props.getPassword}
          getState={this.getPassword}
					passwordCheck={this.passwordCheck}
					ensurePwdCheck={this.ensurePwdCheck}
					setPwdCheck={this.setPwdCheck}
         />
        <span style={styles.error(this.state.passwordError)}>密码长度应该在6到16位之间</span>
        <span style={styles.error(this.state.passwordCheck)}>两次次输入的密码不同</span>

        <RadiusInput
          placeholder="请确认密码"
          type="password"
          getValue={this.props.getPassword}
          getState={this.getEnsurePassword}
          ensurePwdCheck={this.ensurePwdCheck}
          />
        <span style={styles.error(this.state.passwordCheck)}>两次次输入的密码不同</span>
      
				<RadiusInput
          placeholder="请输入手机号(手机QQ任选其一)"
          getValue={this.props.getTel}
          getState={this.getTel}   
          telCheck={this.telCheck}
          setLinkCheck={this.setLinkCheck}   
          />
        <span style={styles.error(this.state.telCheck)}>手机号应为11位</span>
        <span style={styles.error(this.state.linkCheck)}>手机号QQ号至少填写一项</span>   
   

				<RadiusInput
          placeholder="请输入QQ号(手机QQ任选其一)"
          getValue={this.props.getQQ} 
          getState={this.getQQ} 
          linkCheck={this.linkCheck}   
          setLinkCheck={this.setLinkCheck}   
        />    
        <span style={styles.error(this.state.linkCheck)}>手机号QQ号至少填写一项</span>
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
	error: (error) => ({
		display: error,
    color: 'red'
	})
};

const mapDispatchToProps = (dispath) => {
	return {
		setError: (e) => {
			dispath(error(e));
		},
		setEmpty: (e) => {
			dispath(empty(e));
		}
	}
}
export default connect(null, mapDispatchToProps)(Register);
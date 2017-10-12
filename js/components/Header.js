import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../actions';

import ShopNote from 'material-ui/svg-icons/Action/loyalty';
import Icon_DropDown from 'material-ui/svg-icons/Navigation/arrow-drop-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {grey900, pink50} from 'material-ui/styles/colors';

import {Link} from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false
		};
		this.handleInfoButton = this.handleInfoButton.bind(this);
		this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
		this.handleQuit = this.handleQuit.bind(this);
    this.handleInformation = this.handleInformation.bind(this);
	}
	signButton() {
		const dropDown = <Icon_DropDown color="black" />;
		return (
			<Link to="/sign">
				<FlatButton
					target="_blank"
					labelPosition="before"
					label="登录"
					labelStyle={styles.id}
					icon={dropDown}
				/>
			</Link>
		);
	}
  componentWillMount() {
    var that = this.props;
    function getCookie(c_name)
{
if (document.cookie.length>0)
  {
    var id;
  var c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    var c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
      id = unescape(document.cookie.substring(c_start,c_end));
    that.quit(id);
    }
    
    return 0;
  }
    return ""
}

    getCookie("userId");
    // this.props.quit(id);
}
	infoButton() {
		const dropDown = <Icon_DropDown color="gray"/>;
		return (
			<FlatButton
        target="_blank"
        labelPosition="before"
        label={this.props.id}
        labelStyle={styles.id}
        icon={dropDown}
        onTouchTap={this.handleInfoButton}
       />
		);
	}
	handleInfoButton() {
		this.setState({openMenu: true});
	}
	handleOnRequestChange(value){
    this.setState({openMenu: value});
  }
  handleQuit() {
  	
    fetch(
      `/logout`,
      {method: "GET", credentials: "same-origin"}
    );

    this.props.quit('登录');
  }
  handleInformation() {

  }

  render() {
  	const iconButton = <IconButton></IconButton>,
  				info = (this.props.id === '登录')
  				? this.signButton() : this.infoButton();
  	return (
			<div style={styles.container}>
				<div style={styles.side}>
					<div>
						<ShopNote style={styles.album} color="red" hoverColor={grey900} />
					</div>
					<h2 style={styles.p}>乐活工大</h2>
				</div>
				<div style={styles.side}>
          <Avatar size={32}>L</Avatar>
          {info}
          <IconMenu
            iconButtonElement={iconButton}
            open={this.state.openMenu}
            onRequestChange={this.handleOnRequestChange}>
            <MenuItem 
              value="1" 
              onTouchTap={this.handleInformation}
              primaryText="个人中心" />
            <MenuItem
              value="quit"
              onTouchTap={this.handleQuit}
              primaryText="退出登录" />
          </IconMenu>
        </div>
			</div>
  		)
  }

}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
	  zIndex: 100,

    width: '100%',
    height: 30,
	  paddingLeft: 32,
	  paddingRight: 32,
	  boxSizing: 'border-box',
	  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
	  borderRadius: 0,
    backgroundColor: pink50,
    color: grey900,

    display: 'flex',
    justifyContent: 'space-between',
  },
  side: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  album: {
    height: 28,
    width: 28,
  },
  p: {
    margin: 0,
	  paddingTop: 0,
	  fontSize: 24,
	  fontWeight: 200,
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Cursive'
  },
  id: {
    color: grey900,
  }
};


const mapStateToProps = (state) => {
	return {
		id: state.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		quit: (id) => {
			dispatch(signin(id));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
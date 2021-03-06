import React from 'react';
import {connect} from 'react-redux';
import {setPage} from '../../actions';

import {teal400} from 'material-ui/styles/colors';

class Link extends React.Component {
  handleSwitch(e, signin, page) {
    e.preventDefault();
    if (this.props.isSignin === !signin) {
      this.props.switchSign(signin);
      this.props.setPage(page);
    }
  }

  render() {
    const isSignin = this.props.isSignin;
    return (
      <div style={styles.container}>
        <div style={styles.hr}></div>
        <a style={styles.a(isSignin)}
           href="#signin" onClick={(e) => this.handleSwitch(e, true, '0')}>登录</a>
        <span style={styles.a(false)}> · </span>
        <a style={styles.a(!isSignin)}
           href="#signup" onClick={(e) => this.handleSwitch(e, false, '1')}>注册</a>
        <div style={styles.hr}></div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: 12,
  },
  a: (c) => ({
    color: c ? teal400 : 'white',
    fontSize: 18,
    textDecoration: 'none',
  }),
  hr: {
    display: 'inline-block',
    height: 1.6,
    backgroundColor: 'white',
    width: 100,
    margin: 6,
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => {
      dispatch(setPage(page));
    }
  };
};
export default connect(null, mapDispatchToProps)(Link);

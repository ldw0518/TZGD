import React from 'react';
import {teal300} from 'material-ui/styles/colors';

class RadiusInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      value: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleClick() {
    if (this.Input !== null) {
      this.Input.focus();
    }
    this.setState({color: teal300});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.getState(event.target.value);
  }

  handleBlur() {
    this.setState({color: 'white'});
    this.props.getValue(this.state.value);
    if(this.props.idCheck) {
      this.props.idCheck();
    }
    if(this.props.usernameCheck) {
      this.props.usernameCheck();
    }
    if(this.props.passwordCheck) {
      this.props.passwordCheck();
    }
    if(this.props.ensurePwdCheck) {
      this.props.ensurePwdCheck();
    }
    if(this.props.telCheck) {
      this.props.telCheck();
    }
    if(this.props.linkCheck) {
      this.props.linkCheck();
    }
  }

  render() {
    const props = this.props;
    return (
      <div style={styles.container(this.state.color)}
           onClick={this.handleClick}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          ref={(ref) => this.Input = ref}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          style={styles.input}
          onFocus={this.props.setIdCheck || 
                   this.props.setPasswordCheck ||
                   this.props.setUsernameCheck ||
                   this.props.setPwdCheck ||
                   this.props.setLinkCheck } />
      </div>
    );
  }
}

const styles = {
  container: (bc) => ({
    width: 260,
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
    width: 200,
    fontSize: 18,
  },
};

export default RadiusInput;

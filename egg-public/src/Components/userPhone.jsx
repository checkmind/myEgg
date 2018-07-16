import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Alert, ButtonToolbar, Button } from 'react-bootstrap'
class userPhone extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);

    this.state = {
      phoneNumber: '',
      password: ''
    };
  }

  getValidationState() {
    const length = this.state.phoneNumber.length;
    console.log(length)
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChangePhone(e) {
    this.setState({ phoneNumber: e.target.value });
  }


  handleChangePsw(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>请输入手机号</ControlLabel>
          <FormControl
            type="text"
            value={this.state.phoneNumber}
            placeholder=""
            onChange={this.handleChangePhone}
          />
          <ControlLabel>请输入密码</ControlLabel>
          <FormControl
            type="text"
            value={this.state.password}
            placeholder=""
            onChange={this.handleChangePsw}
          />
        </FormGroup>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
      good.</Alert>
        <ButtonToolbar className='btn-between'>
          <Button bsStyle="primary" className='loginBtn'>登陆</Button>
        </ButtonToolbar>
      </form>
    );
  }
}
export default userPhone
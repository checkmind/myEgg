import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Alert, ButtonToolbar, Button } from 'react-bootstrap'
class userName extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);

    this.state = {
      phoneNumber: '',
      code: ''
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
    this.setState({ code: e.target.value });
  }

  onCick() {
    this.props.chooseLoginBtn({
      phoneNumber: this.state.phoneNumber,
      code: this.state.code
    })
  }
  onTapCode() {
    this.props.getCode({
      phoneNum: this.state.phoneNumber
    })
  }
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>
          <ControlLabel>请输入手机号</ControlLabel>
          <FormControl
            type="text"
            value={this.state.phoneNumber}
            placeholder=""
            onChange={this.handleChangePhone}
          />
          <ControlLabel>请输入验证码</ControlLabel>
          <FormControl
            type="text"
            value={this.state.code}
            placeholder=""
            onChange={this.handleChangePsw}
          />
        </FormGroup>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
      good.</Alert>
        <ButtonToolbar className='btn-between'>
          <Button bsStyle="primary" onClick={()=>{ this.onTapCode() }}>获取验证码</Button>
          <Button bsStyle="primary" onClick={() => { this.onCick() }}>登陆</Button>
        </ButtonToolbar>
      </form>
    );
  }
}
export default userName
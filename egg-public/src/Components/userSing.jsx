import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Alert, ButtonToolbar, Button } from 'react-bootstrap'
class userName extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);

    this.state = {
      phoneNumber: '',
      password: '',
      checkCode: ''
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
    console.log(this)
    this.setState({ password: e.target.value });
  }
  handleChangeCodes(e) {
    console.log(this)
    this.setState({ checkCode: e.target.value });
  }
  /**
   * 注册信息返回父组件
   */
  onCick() {
    this.props.chooseSingBtn({
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      checkCode: this.state.checkCode
    });
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
          <ControlLabel>请输入验证码</ControlLabel>
          <FormControl
            type="text"
            value={this.state.checkCode}
            placeholder=""
            onChange={(ev) => { this.handleChangeCodes(ev) }}
          />
        </FormGroup>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
      good.</Alert>
        <ButtonToolbar className='btn-between'>
          <Button bsStyle="primary" className='loginBtn' onClick={() => { this.onCick() }}>注册</Button>
        </ButtonToolbar>
      </form>
    );
  }
}
export default userName
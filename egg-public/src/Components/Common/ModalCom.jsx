import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class ModalCom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    }
  }
  handleHide() {
    console.log(1)
  }
  render() {
    return (<Modal
      show={this.state.show}
      onHide={this.handleHide}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">
          Contained Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleHide}>Close</Button>
      </Modal.Footer>
    </Modal>)
  }
}
export default ModalCom
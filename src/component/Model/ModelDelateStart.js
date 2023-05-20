import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteStart } from '../../services/apiServices';


const ModelDelateStart = (props) => {
  const { show, setShow, dataDelete } = props

  const handleClose = () => {
    setShow(false)
  };



  const handleSubmitDelete = async () => {
    let data = await deleteStart(dataDelete.status_id)
    if (data && data.EC === 0) {
      handleClose();
      await props.fetch();
    }
  }


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG NHẬP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataDelete && dataDelete?.status_id ? dataDelete?.status_id : "không co"}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDelete()}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModelDelateStart
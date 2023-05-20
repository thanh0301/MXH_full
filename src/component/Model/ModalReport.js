import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import _ from 'lodash'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Postreport, creatcmt } from '../../services/apiServices';
import { useSelector } from 'react-redux';
const ModalReport = (props) => {
  const { show, setShow ,showRp} = props
  const params = useParams();
  const quizId = params.id;
  const navigate = useNavigate();
  console.log('check paramse', params)
  const handleClose = () => {
    setShow(false)
  };
  const Account = useSelector((state) => state.accountThanh.Account);
  const [reason, setreason] = useState("")
  

  
  const handlcmt= async () => {

    let data = await Postreport(Account.User_id,showRp.status_id,reason)

    if (data && data.EC === 0) {
      handleClose();
    }   
  }


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bình luận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Nội dung bình luận</Form.Label>
              <Form.Control value={reason} as="textarea" rows={3}
                onChange={(event) => setreason(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handlcmt} >
            Đăng bài
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalReport;
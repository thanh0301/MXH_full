import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import _ from 'lodash'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { changePassword, creatcmt } from '../../services/apiServices';
import { useSelector } from 'react-redux';
const Modelmk = (props) => {
  const { show, setShow } = props
  const params = useParams();
  const quizId = params.id;
  const navigate = useNavigate();
  console.log('check paramse', params)
  const handleClose = () => {
    setShow(false)
  };
  const Account = useSelector((state) => state.accountThanh.Account);
  const [oldPass, setoldPass] = useState("")
  const [newPass, setnewPass] = useState("")

 

  const handlcmt= async () => {

  
  let data = await changePassword(Account.User_id,oldPass,newPass)

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
              <Form.Control value={oldPass} as="textarea" rows={3}
                onChange={(event) => setoldPass(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Nội dung bình luận</Form.Label>
              <Form.Control value={newPass} as="textarea" rows={3}
                onChange={(event) => setnewPass(event.target.value)}
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

export default Modelmk;
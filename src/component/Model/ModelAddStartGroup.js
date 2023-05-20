import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { Feeling, LiveVideo, Photo } from "../../svg";
import '../Model/ModalAddstatus.scss'
import { PostGrStt } from "../../services/apiServices";
const ModelAddStartGroup = (props) => {
  const { show, setShow, user} = props;
  const Account = useSelector((state) => state.accountThanh.Account);
  console.log("aaaaaaaaa", Account.User_id);
  const handleClose = () => {
    setShow(false);
    setContent("");
    setUser_id(Account.User_id);
    setgr_id(user.gr_id);
  };

  const [content, setContent] = useState("");
  const [user_id, setUser_id] = useState("");

  const [gr_id, setgr_id] = useState("");
  const handlecereatstat = async () => {
    console.log('ceheck ádasad',user)
     let data = await PostGrStt(content,Account.User_id,`${user.gr_id}`)
  };

  return (
    <>
     

      <Modal backdrop = 'static' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <div className="add_statusid">        
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label> ID</Form.Label>
              <Form.Control
                placeholder="id"
                value={user_id}
                // onChange={(event) => setUser_id(event.target.value)}
              />
            </Form.Group>
            </div> */}
            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                value={content}
                as="textarea"
                rows={3}
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handlecereatstat}>
            Đăng bài
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelAddStartGroup;

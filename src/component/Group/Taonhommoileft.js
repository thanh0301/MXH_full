import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';

import { useSelector } from "react-redux"
import '../../Style/Taonhommoileft.scss'
import { GroupCreate } from '../../services/apiServices';
import { useNavigate } from 'react-router-dom';
const Taonhommoileft = () => {


    const [gr_name,setgr_name]=  useState("")
    const [gr_content,setgr_content]=  useState("")
    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    
    const Account = useSelector(state => state.accountThanh.Account)
    const img1 = 'http://localhost:8080'
    
    const handleGroupCreate  =async () => {
    
      let res = await GroupCreate(gr_name,Account.User_id,gr_content);
      console.log("Check res:", res);

    }

    return (
        <>
            <div className="Taonhommoileft">
                <p>Tạo Nhóm</p>
                <div className="Taonhommoileft-all">
                    <div className="Taonhommoileft-img">
                        <img src={`${img1}${Account.Avater}`} />
                    </div>
                    <div className="Taonhommoileft-title">
                        <span> <b> {Account.Last_Name} </b> </span>
                        <span> <i>Quản trị viên </i></span>
                    </div>
                </div>
                <div>
                <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 200 }}
      scrollToFirstError
    >
      <Form.Item >
        <Input placeholder="Tên nhom" value={gr_name} onChange={(e) => setgr_name(e.target.value)} />
      </Form.Item>
      <Form.Item >
        <Input placeholder="content" value={gr_content} onChange={(e) => setgr_content(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Select placeholder="select your gender">
          <Option value="công khai<">Công khai</Option>
          <Option value="Riêng tư<">Riêng tư</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={() => handleGroupCreate()}>
          Register
        </Button>
      </Form.Item>
    </Form>
                </div>
            </div>
        </>
    )

}

export default Taonhommoileft
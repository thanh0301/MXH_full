
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";
// import "./App.css";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  GroupOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";
import Bangfeed from "./Bangfeed";
import Khampha from "./Khampha";
import Nhomcuaban from "./Nhomcuaban";
import Taonhommoi from "./Taonhommoi";


const Group = () =>{
  const navigate = useNavigate();
    return(
         <div className="SideMenu">
      <Menu
        onClick={({ key }) => {
          if (key ) {
            navigate(key);
          } 
        }}
        items={[

          { label: "Bảng feed của bản", key: "group/feed ", icon: <HomeOutlined /> },

          {
            label: "Khám Phá",
            key: "group/Khampha",
            icon: <GroupOutlined />,
          },
          {
            label: "Nhóm của bản",
            key: "group/Nhomcuaban",
            icon: <UnorderedListOutlined />,
          },
          {
            label: "Tạo nhóm mới",
            key: "create",
            icon: <UnorderedListOutlined />,
          },
      
        ]}
      ></Menu>
      <div>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="group/feed" element={<Bangfeed/>}></Route>
          <Route path="group/Khampha" element={<Khampha/>}></Route>
          <Route path="group/Nhomcuaban" element={<Nhomcuaban/>}></Route>
          <Route path="create" element={<Taonhommoi/>}></Route>
        </Routes>
      </div>
    </div>
    )
}


export default Group
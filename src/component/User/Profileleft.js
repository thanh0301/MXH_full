

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
import Trang from "./Trang";
import Traingiemketnoi from "./Traingiemketnoi";
import Taikhoang from "./Taikhoang";
import Thontincanhan from "./Thontincanhan";
import Matkhauvabaomat from "./Matkhauvabaomat";
const Profileleft = () =>{
        
    const Account = useSelector((state) => state.accountThanh.Account);
  const img1 = "http://localhost:8080";
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
            {
              label: "",
              key: `/${Account.User_id}`,
              icon: (
                <span>
                  <img className="pic_cn" src={`${img1}${Account?.Avater}`} />
                  <Link to="/asda">
                    {Account?.First_Name} {Account?.Last_Name}
                  </Link>
                </span>
              ),
            },
            { label: "Trang cá nhân", key: "Profile/Trang", icon: <HomeOutlined /> },
  
            {
              label: "Trải nghiệm kết nối",
              key: "Profile/Traingiemketnoi",
              icon: <GroupOutlined />,
            },
            {
              label: "Tài khoản",
              key: "Profile/Taikhoang",
              icon: <UnorderedListOutlined />,
            },
            { label: "Thông tin cá nhân", key: "Profile/Thontincanhan", icon: <UserOutlined /> },
            {
              label: "Mật khẩu và bảo mật ",
              key: "Profile/Matkhauvabaomat",
              icon: <PoweroffOutlined />,
              danger: true,
            },
            {
                label: "Thông tin và  quyền của bạn",
                key: "/signout",
                icon: <PoweroffOutlined />,
                danger: true,
              },
             
          ]}
        ></Menu>
  
        <div>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="Profile/Trang" element={<Trang/>}></Route>
          <Route path="Profile/Traingiemketnoi" element={<Traingiemketnoi/>}></Route>
          <Route path="Profile/Taikhoang" element={<Taikhoang/>}></Route>
          <Route path="Profile/Thontincanhan" element={<Thontincanhan/>}></Route>
          <Route path="Profile/Matkhauvabaomat" element={<Matkhauvabaomat/>}></Route>
        </Routes>
        </div>
      </div>
    )
    
}



export default Profileleft
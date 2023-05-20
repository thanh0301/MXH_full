
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
import Profile from "../../User/Profile";
const Left_Home = () => {

  const Account = useSelector((state) => state.accountThanh.Account);
  const img1 = "http://localhost:8080";
  const navigate = useNavigate();
  return (
    
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
          { label: "Home", key: "/", icon: <HomeOutlined /> },

          {
            label: "Group",
            key: "/group",
            icon: <GroupOutlined />,
          },
          {
            label: "Admin",
            key: "/admin",
            icon: <UnorderedListOutlined />,
          },
          { label: "Profile", key: "/Profile", icon: <UserOutlined /> },
          // {
          //   label: "Signout ",
          //   key: "/signout",
          //   icon: <PoweroffOutlined />,
          //   danger: true,
          // },
        ]}
      ></Menu>

      <div>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="/Group" element={<div>Group</div>}></Route>
          <Route path="/UserList" element={<div>UserList</div>}></Route>
          <Route path="/Profile" element={<div>Profile</div>}></Route>
          <Route path="/Singout" element={<div>Singout</div>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default Left_Home;

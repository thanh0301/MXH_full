import Header from "./Header";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Compole from "./User/Compole";
import Admin from "./Admin/Admin";
import Composeuser from "./Admin/Composeuser";
import Group from "./Group/Getgroup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Showcmt from "./Home/Right_Home/GetCmmt";
import Bangfeed from "./Group/Bangfeed";
import Khampha from "./Group/Khampha";
import Nhomcuaban from "./Group/Nhomcuaban";
import Taonhommoi from "./Group/Taonhommoi";
import Profile from "./User/Profile";
import Trang from "./User/Trang";
import Traingiemketnoi from "./User/Traingiemketnoi";
import Taikhoang from "./User/Taikhoang";
import Thontincanhan from "./User/Thontincanhan";
import Grouphastag from "./Grouphastag";
import PerPageGroup from "./Group/PerPageGroup";
import Matkhauvabaomat from "./User/Matkhauvabaomat";

const Layout = () => {
  const Account = useSelector((state) => state.accountThanh.Account);

  return (
    <>
      {/* <div style={{ width: 200, position: "absolute", top: 100 }}>
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              // sign out
            } else {
              navigate(key);
            }
          }}
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            {
              label: "Dashboard",
              key: "/dashboard",
              icon: <DashboardOutlined />,
            },
            {
              label: "UserList",
              key: "/userlist",
              icon: <UnorderedListOutlined />,
            },
            { label: "Profile", key: "/profile", icon: <UserOutlined /> },
            {
              label: "Signout ",
              key: "/signout",
              icon: <PoweroffOutlined />,
              danger: true,
            },
          ]}
        ></Menu>
      </div> */}

      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/Grouphastag" element={<Grouphastag />}></Route>
  
        <Route path="/group/group/Khampha/:id" element={<PerPageGroup />} />
        <Route path="/:id" element={<Compole />} />
        <Route path="/cmt/:id" element={<Showcmt />} />
        <Route path="admin" element={<Admin />}>
          <Route path="alluser" element={<Composeuser />} />
        </Route>
        <Route path="group" element={<Group />}>
          <Route path="group/feed" element={<Bangfeed />} />
          <Route path="group/Khampha" Khampha={<Khampha />} />
          <Route path="group/Nhomcuaban" element={<Nhomcuaban />} />

  
      
        </Route>
        <Route path="group/create" element={<Taonhommoi />} />
        <Route path="Profile" element={<Profile />}>

          <Route path="Profile/Trang" element={<Trang />} />
          <Route path="Profile/Traingiemketnoi" element={<Traingiemketnoi/>}></Route>
          <Route path="Profile/Taikhoang" element={<Taikhoang/>}></Route>
          <Route path="Profile/Thontincanhan" element={<Thontincanhan/>}></Route>
          <Route path="Profile/Matkhauvabaomat" element={<Matkhauvabaomat />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <div>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/Dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="/UserList" element={<div>UserList</div>}></Route>
          <Route path="/Profile" element={<div>Profile</div>}></Route>
          <Route path="/Singout" element={<div>Singout</div>}></Route>
        </Routes>
      </div> */}
    </>
  );
};

export default Layout;

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getUser1 } from "../../services/apiServices";
import Button from "react-bootstrap/Button";
import { AiOutlineGlobal } from "react-icons/ai";
import Demo from "./Demo";

import Trangcanhan from "./Trangcanhan";
import Header from "../Header";
import Headertop from "../Headertop";

//

import { getUser } from "../../services/apiServices";
import {
  AiOutlineVideoCamera,
  AiFillFileImage,
  AiOutlineSmile,
} from "react-icons/ai";
import Createstatus from "../Model/Createstatus";
import { MultiStateCheckbox } from "primereact/multistatecheckbox";
import Dropdown from "react-bootstrap/Dropdown";
import ModelDelateStart from "../Model/ModelDelateStart";
import ModelUpdaStart from "../Model/ModelUpdaStart";
import ModelAddStartUser from "../Model/ModelAddStartUser";
import { useSelector } from "react-redux";
import Modelcmt from "../Model/ModalCmmt";
import ModalReport from "../Model/ModalReport";
const Compole = () => {

  const [showdelete, setshowdelete] = useState(false);
  const [showUp, setshowUp] = useState(false);
  const [showdangky, setshowdangky] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  const [shoModalUpda, setshoModalUpda] = useState({});

  const [user, setuser] = useState([]);
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;
  console.log(quizId);

  console.log(location);
  
  useEffect(() => {
    fetch();
  }, [quizId]);
  const fetch = async () => {
    let data = await getUser(quizId);
    if (data && data.EC === 0) {
      console.log("get aaaaa", data)
      setuser(data.content);
    }
  };

  const handleClickBtnDelete = (start) => {
    setshowdelete(true);
    setDataDelete(start);
  };
  const handleClickBtnUpda = (start) => {
    setshowUp(true);
    console.log('check start dekete',start)
    setshoModalUpda(start);
  };
  const Account = useSelector((state) => state.accountThanh.Account);

  const [showcmd, setshowcmd] = useState(false)
  const [showbinhluan,setshobinhluan] = useState({})
  const [showRport, setshowRport] = useState(false)
  const handleClickbinhluan = (start) =>{
    setshowcmd(true)
    console.log('check start bình luận',start)
    setshobinhluan(start)
}

const [showRp,setshowRp] = useState({})
const handleClickReport= (start) =>{
  setshowRp(start)
  setshowRport(true)
 
}

  return (
    <div>
      <Headertop />
      <Trangcanhan />
      <div className="home-tile">
        <div onClick={() => setshowdangky(true)} className="home-span">
          <span>Bạn đang nghĩ gì ?</span>
        </div>
        <hr />
        <div className="home-icon">
          <span className="icon1">
            {" "}
            <AiOutlineVideoCamera />
            Video trực tiếp
          </span>
          <span className="icon2">
            <AiFillFileImage />
            Hình ảnh/Video
          </span>
          <span className="icon3">
            {" "}
            <AiOutlineSmile />
            Cảm xúc/Hoạt động
          </span>
        </div>
      </div>
      <div className="container status_user">
        <Demo
          user={user}
          handleClickBtnDelete={handleClickBtnDelete}
          handleClickBtnUpda={handleClickBtnUpda}
          handleClickbinhluan={handleClickbinhluan}
          handleClickReport={handleClickReport}
        />
      </div>

      <ModelDelateStart 
            show={showdelete} 
            setShow={setshowdelete}
            dataDelete={dataDelete}
            fetch={fetch}
            
            />
      <ModelUpdaStart
        show={showUp}
        setShow={setshowUp}
        shoModalUpda={shoModalUpda}
        fetch={fetch}
      />

      <ModelAddStartUser
        show={showdangky}
        setShow={setshowdangky}
        fetch={fetch}
      />
     

     <Modelcmt  
    show={showcmd} setShow={setshowcmd}
            showbinhluan={showbinhluan}/>

    <ModalReport show={showRport} setShow={setshowRport} showRp={showRp} />
    </div>
  );
};

export default Compole;

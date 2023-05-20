import { useEffect } from "react";
import Headertop from "../Headertop"
import { getUser2, getUser3 } from "../../services/apiServices";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Trangcanhangroup from "./Trangcanhangroup";

import {
  AiOutlineVideoCamera,
  AiFillFileImage,
  AiOutlineSmile,
} from "react-icons/ai";
import ModelAddStartGroup from "../Model/ModelAddStartGroup";
import DemoGroup from "./DemoGroup";
const PerPageGroup = () =>{

  const [showstartgroup, setshowstartgroup] = useState(false);


  const [user, setuser] = useState([]);

  const params = useParams();

  const quizId = params.id;
  useEffect(() => {
      fetch();
    }, [quizId]);
    const fetch = async () => {
      let data = await getUser2(quizId);
      if (data && data.EC === 0) {
        console.log("get aaaaa", data)
        setuser(data.content);
      }
    };

    const [user1, setuser1] = useState([]);
    
    useEffect(() => {
      fetch1();
    }, [quizId]);
    const fetch1 = async () => {
      let data = await getUser3(quizId);
      if (data && data.EC === 0) {
        console.log("get aaaaa", data)
        setuser1(data.content);
      }
    };
  

    return(
      <>
             <div>
           <Headertop />
            <Trangcanhangroup />
            <div className="home-tile">
        <div onClick={() => setshowstartgroup(true)} className="home-span">
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

        <div>
            <DemoGroup  user1 ={user1}/>
        </div>
        </div>
          <ModelAddStartGroup  show={showstartgroup} setShow={setshowstartgroup} user={user} />
      </>


    )
}


export default PerPageGroup
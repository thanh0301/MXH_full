import { useEffect } from "react";
import { getUser2 } from "../../services/apiServices";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AvatarGroup from "./AvatarGroup";
import { Button } from "react-bootstrap";
import Modelgup from "../Model/Modelgup";


const Trangcanhangroup  = () =>{

    const [user, setuser] = useState([]);

    const params = useParams();
    const [avatar1, setavatar1] = useState(false);
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
    return(

        <div>
        <div className="container User ">
          <div>
            <AvatarGroup user={user}  />
           
            <div>
              <div className="bt-bg">
                <Button onClick={() => setavatar1(true)} variant="light">
                  Chỉnh sửa ảnh bìa
                </Button>
                <Modelgup user={user}  show={avatar1} setShow={setavatar1} fetch={fetch} />
              </div>
              <div className="bt-bg1">

              </div>
            </div>
          </div>
        </div>

        </div>

    )
}

export default  Trangcanhangroup 

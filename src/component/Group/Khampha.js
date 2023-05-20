import { useEffect } from "react";
import { useState } from "react";
import { Statusgroupnn } from "../../services/apiServices";
import { Link } from "react-router-dom";

const Khampha = () => {



  const [Statusgroup, setStatusgroup] = useState([]);
  useEffect(() => {
    fetchStatusgroup();
  }, []);
  const fetchStatusgroup = async () => {
    let data = await Statusgroupnn();
    if (data && data.EC === 0) {
      console.log(data);
      setStatusgroup(data.content);
    }
  };

  const img1 = "http://localhost:8080";
  return (
    <div>
      {
        Statusgroup &&
        Statusgroup.length > 0 &&
        Statusgroup.map((item, index) => {
          console.log('check api item', item)
          return (
            <>
              <div >
                <div key={index}>
                  <img src={`${img1}${item?.gr_ava}`} />
                  <Link to={String(item.gr_id)}>
                    {item.gr_name}
                  </Link>
                </div>
              </div>
            </>


          )
        })


      }
    </div>
  )
}
export default Khampha
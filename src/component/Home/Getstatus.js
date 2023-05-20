
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
const Getstatus = (props) => {
  const Account = useSelector((state) => state.accountThanh.Account);
  const img1 = "http://localhost:8080";
  const { listdangtin } = props;
  const navigate = useNavigate();
  return (
    <>
      {listdangtin &&
        listdangtin.length > 0 &&
        listdangtin.map((item, index) => {
          console.log(">>> check item  tam love:", item);
          return (
            <div key={index} className="content_status">
              <div className="status-all">
                <div className="" key={item.id}>
                  <div className="status">
                    <div className="status-title">
                      <div className="status-tilte1">
                        <img src={`${img1}${item?.user?.avatar}`} />
                        <Link to={String(item?.user?.user_id)}>
                          {item?.user?.first_name} {" "} {item?.user?.last_name}  
                                                
                        </Link>
                      </div>
                    </div>
                    <div className="status-conten">
                      <h2>
                        {item.content} 
                      </h2>
                      
                    </div>
                    <div className="status--icon">
                      <div className="status--icon1">
                        <span>Thích</span>
                      </div>
                      <div
                        onClick={() => navigate(`/cmt/${item?.status_id}`)}
                        className="status--icon1"
                      >
                        <span>Bình Luận</span>
                      </div>
                      <div className="status--icon1">
                        <span>Chia sẻ</span>
                      </div>
                    </div>
                    <div  className="ip_cmmt">
                    <img  style={{height:40, width:40, borderRadius:30}} src={`${img1}${Account?.Avater}`} />
                      <input onClick={() => props.handleClickbinhluan(item)}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Getstatus;

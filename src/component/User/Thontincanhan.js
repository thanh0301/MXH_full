
import { useSelector } from "react-redux";




const Thontincanhan = () => {
    const Account = useSelector((state) => state.accountThanh.Account);

    return (
        <div>
            <h2>Thông tin cá nhân</h2>

            <div className="table_CN">
                <div className="CN_name">
                    <h5>Thông tin liên hệ</h5>
                    <p>{Account.Email}</p>
                </div>
                <div className="CN_DoB">
                    <h5>Ngày sinh</h5>
                    <p>{Account.DoB}</p>
                </div>
            </div>
        </div>
    )
}

export default Thontincanhan
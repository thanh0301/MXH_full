import { useSelector } from "react-redux"
import { userHastag1 } from "../services/apiServices"
import { useNavigate } from "react-router-dom";
import { AiOutlineNumber } from "react-icons/ai";
import ListGroup from 'react-bootstrap/ListGroup';
const Grophastagright = () => {

    const Account = useSelector(state => state.accountThanh.Account)
    const navigate = useNavigate();
    const handleonlcik1 = async () => {
        let data = await userHastag1(1, Account.User_id)
    }

    return (

        <div className="hastag_right">

             {/* <div className="Hastag_name" onClick={() => handleonlcik1()}>
                <p className="name_tag"> <AiOutlineNumber />Tin hoc  </p>
            </div> */}
          
            <ListGroup>
                <ListGroup.Item disabled style={{ textAlign: 'center' }} >HasTag List</ListGroup.Item>
                <ListGroup.Item variant="primary" onClick={() => handleonlcik1()}> <AiOutlineNumber />English language</ListGroup.Item>
                <ListGroup.Item variant="light" onClick={() => handleonlcik1()}> <AiOutlineNumber />Informatics</ListGroup.Item>
                <ListGroup.Item variant="secondary" onClick={() => handleonlcik1()}> <AiOutlineNumber />Vietnamese language</ListGroup.Item>
                <ListGroup.Item variant="success" onClick={() => handleonlcik1()}> <AiOutlineNumber />Japanese language</ListGroup.Item>
                <ListGroup.Item variant="danger" onClick={() => handleonlcik1()}> <AiOutlineNumber />Chinese language</ListGroup.Item>
                <ListGroup.Item variant="warning" onClick={() => handleonlcik1()}> <AiOutlineNumber />Mathematics</ListGroup.Item>
                <ListGroup.Item variant="info" onClick={() => handleonlcik1()}> <AiOutlineNumber />Literature </ListGroup.Item>              
            </ListGroup>
            <div onClick={navigate('/')}>
                <p> Exit</p>
            </div>
        </div>
    )
}
export default Grophastagright
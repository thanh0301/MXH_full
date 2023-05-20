import { useState } from "react";
import { useSelector } from "react-redux";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Image } from "primereact/image";
import { auth, provider } from "../../FirebaseConfig";
const Trang = (props) => {
    // const {user} = props;
    const Account = useSelector((state) => state.accountThanh.Account);
    const [avatar1, setavatar1] = useState(false);
    const [user, setuser] = useState(null);

    const img1 = "http://localhost:8080";


    const [profilePic, setProFilePic] = useState(null);
    const handlefaceBookLogin = () => {
        signInWithPopup(auth, provider).then((result) => {
            setuser(result.user);
            console.log(">>> check Pic :", result.user.providerData);
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
                .then((response) => response.blob())
                .then((blob) => {
                    setProFilePic(URL.createObjectURL(blob));
                })
        }).catch((err) => {
            console.log(err);
        })
    }

    const handlelogOut = () => {
        setuser(null)
    }
    return (
        <div className="container" >
            <div>

            </div>
            <h3>Trang cá nhân</h3>
            <p>Quản lý thông tin trên trang cá nhân và dùng chung thông tin trên Facebook. Bạn có thể thêm tài khoản để bổ sung trang cá nhân.</p>

            <div style={{}} className=" Trang">
                <div className="img_CN">
                    <Image
                        src={`${img1}${Account.Avater}`}
                        alt="Image"
                        width="250"
                        preview
                    />
                    <span className="Name_CN">{Account.First_Name}{" "}{Account.Last_Name}</span>



                </div >
                <div className="contact">
                    <p>Facebook , Gmail</p>
                </div>


                <div className="btn_plus">
                    {user ? (
                        <>

                            <button className="btn btn-secondary btn-md " onClick={handlelogOut}>LOGOUT</button>
                            <h3>WELCOME{user.displayName}</h3>
                            <p>{user.Email}</p>
                            <div className="photo">
                                <img src={profilePic} referrerPolicy="no-referrer" />
                            </div>
                        </>
                    ) : (
                        <button className="btn_FB" onClick={() => handlefaceBookLogin()}>Facebook</button>
                    )

                    }
                </div>
                {/* <div className="btn_plus">


                    <button className="btn_GM">Gmail</button>
                </div> */}
            </div>
        </div>
    )
}

export default Trang
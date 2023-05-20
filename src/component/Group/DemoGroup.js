

const DemoGroup = (props) =>{

    const {user1} = props;
    const img1 = 'http://localhost:8080'
    return(
        <>
            {
                user1 && user1.length > 0 &&
                user1.map((item, index) => {
                    console.log('check tat ca starts', item)
                    return (
                        <div key={`table',${index}`} className="status-all">
                            <div className="content_status" key={item.id}     >
                                <div className=" container status">
                                    <div className="status-title">
                                        <div className="status-tilte1">
                                            <img src={`${img1}${item.user.avatar}`} />
                                            <h2>{item.user.last_name} {item.user.first_name}
                                                <br />
                                                {/* <AiOutlineGlobal /><span>{item.Status_Type}</span> */}
                                            </h2>
                                            {/* <div className="drop_setting">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="link">
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => props.handleClickBtnUpda(item)} >Sửa bài đăng </Dropdown.Item>
                                                        <Dropdown.Item onClick={() => props.handleClickBtnDelete(item)} >Xóa</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="status__conten">
                                        <h2>{item.content}</h2>
                                    </div>
                                    <div className="status__icon">
                                        <div className="status--icon1">
                                            <span>Thích</span>
                                        </div >
                                        {/* <div className="status--icon1" onClick={() => navigate(`/cmt/${item?.status_id}`)}>
                                            <span

                                            >Bình Luận</span>
                                        </div> */}
                                        <div className="status--icon1">
                                            <span>Chia sẻ</span>
                                        </div>
                                    </div>
                                    <div className="ip_cmmt">
                                        {/* <img style={{ height: 40, width: 40, borderRadius: 30 }} src={`${img1}${Account?.Avater}`} />
                                        <input onClick={() => props.handleClickbinhluan(item)} /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                )
            }

        </>
    )
} 

export default DemoGroup


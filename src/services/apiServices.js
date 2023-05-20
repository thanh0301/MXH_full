import axios from "../utils/axiosCustomsize";
const postLogin = (account, password) => {
  return axios.post(`/api/login/v1/login`, {
    account: account,
    password: password,
  });
};

const getUser = (id) => {
  return axios.get(`/api/status/v1/statusshowid/${id}`);
};

const getstatus = () => {
  return axios.get(`/api/status/v1/statusshow`);
};

const getUser1 = (id) => {
  return axios.get(`/api/perpage/v1/perpage/${id}`);
};

const Loginsinup = (account, password, first_name, last_name, dob, email) => {
  const data = new FormData();
  data.append("account", account);
  data.append("password", password);
  data.append("first_name", first_name);
  data.append("last_name", last_name);
  data.append("dob", dob);
  data.append("email", email);

  return axios.post("/api/login/v1/signup", data);
};

const updataStart = (id,content) =>{
  const data = new FormData();
  data.append('id', id)
  data.append('content', content)
  return  axios.put('/api/status/v1/statusupdate', data)
}
const logout = (email) => {
  return axios.post("/api/login/v1/logout", {
    email: email,
  });
};


const deleteStart = (status_id) => {
  return axios.delete("/api/status/v1/statusdelete",  { data: { id: status_id},  });
};
const cmt = (id) =>{
  
  return axios.get(`/api/status/v1/cmdId/${id}`)
}

const creatcmt = (user_id,status_id,comment) =>{
  const data = new FormData();
  data.append('user_id', user_id);
  data.append('status_id', status_id)
  data.append('comment', comment);
 return  axios.post('/api/status/v1/StatusCmt', data)  
}

const GroupCreate = (gr_name,user_id,gr_content) =>{
  const data = new FormData();
  data.append('gr_name', gr_name);
  data.append('user_id', user_id);
  data.append('gr_content', gr_content);
 return  axios.post('/api/group/v1/groupcreate', data)  
}

const userHastag1 =(hastag_id,user_id) =>{
  const data = new FormData();
  data.append('hastag_id', hastag_id);
  data.append('user_id', user_id);

 return  axios.post('/api/group/v1/userHastag', data)  
}


const Statusgroupnn = () =>{
  
  return axios.get(`/api/group/v1/Statusgroup`)
}

const getUser2 = (id) => {
  return axios.get(`/api/perpage/v1/PerPageGroup/${id}`);
};


const PostGrStt = (content,user_id,gr_id) =>{
  const data = new FormData();
  data.append('content', content);
  data.append('user_id', user_id)
  data.append('gr_id', gr_id);
 return  axios.post('/api/group/v1/PostGrStt', data)  
}

const getUser3 = (id) => {
  return axios.get(`/api/group/v1/ShowGrStt/${id}`);
};

const Postreport = (user_id,status_id,reason) =>{
  const data = new FormData();
  data.append('user_id', user_id);
  data.append('status_id', status_id)
  data.append('reason', reason);
 return  axios.post('/api/group/v1/StatusRp', data)  
}

const changePassword = (user_id,oldPass,newPass) =>{
  const data = new FormData();
  data.append('user_id', user_id)
  data.append('oldPass', oldPass)
  data.append('newPass', newPass)
  return  axios.put('/api/login/v1/changePassword', data)
}

export {
  postLogin,
  getUser,
  getstatus,
  getUser1,
  Loginsinup,
  logout,
  deleteStart,
  cmt,
  creatcmt,
  updataStart,
  GroupCreate,
  userHastag1,
  Statusgroupnn,
  getUser2,
  PostGrStt,
  getUser3,
  Postreport
  ,changePassword
};

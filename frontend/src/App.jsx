import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useEffect, useState } from "react"
import Beranda from "./pages/Beranda";
import Loading from "./components/Loading";
import axios from "axios";
import Page404 from "./pages/404";

export default function App () {
  const [user,setUser] = useState();

  useEffect(() => {
    user == undefined ? getUser() : undefined;
  },[])

  async function getUser () {
    const response = await axios.get("http://localhost:5000/api/user",{withCredentials:true});
    if(checkUser(response)){
      setUser(response.data.data);
    }
  }

  async function removeUser () {
    const response = await axios.get("http://localhost:5000/api/logout",{withCredentials:true});
    setUser(false);
  }

  function checkUser (response) {
    if(response.data.msg === "dangerToken"){
      setUser(false);
      return false;
    };
    return true;
  }

  return <BrowserRouter>
    {user == undefined ? 
    <Routes>
        <Route path="*" element={<Loading />} />
    </Routes>
    : user == false ?
    <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
    : 
    <Routes>
        <Route path="/" element={<Beranda user={user} removeUser={removeUser} />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
    }
  </BrowserRouter>
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUser } from "./functions/UserFuntion"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Beranda from "./pages/Beranda";
import Loading from "./components/Loading";
import Page404 from "./pages/404";

export default function App () {
  const [user,setUser] = useState();
  
  useEffect(() => {
    getUser(setUser);
  },[])

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
        <Route path="/" element={<Beranda user={user} setUser={setUser} />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
    }
  </BrowserRouter>
}
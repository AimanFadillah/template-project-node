import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUser } from "./functions/UserFuntion"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Beranda from "./pages/Beranda";
import Loading from "./components/Loading";
import Page404 from "./pages/404";
import DataContext from "./variabels/Context.js"
import Middleware from "./components/Midleware.jsx"

export default function App () {
  const [user,setUser] = useState();
  
  const globalVariabel = {user,setUser}

  useEffect(() => {
    getUser(setUser);
  },[])

  return <BrowserRouter>
    <DataContext.Provider value={globalVariabel} >

      <Middleware next={user == undefined} >
        <Route path="*" element={<Loading />} />
      </Middleware>

      <Middleware next={user == false} >
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />  
        <Route path="*" element={<Page404 />} />
      </Middleware>

      <Middleware next={user} >
        <Route path="/" element={<Beranda />} />
        <Route path="*" element={<Page404 />} />
      </Middleware>
      
    </DataContext.Provider>
  </BrowserRouter>
}
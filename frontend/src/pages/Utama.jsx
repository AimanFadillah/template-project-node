import { useContext } from "react"
import DataContext from "../variabels/Context"
import Navbar from "../components/Navbar";

export default function Utama () {
    const {user,setUser,userFunction} = useContext(DataContext);

    return <Navbar>
        <div className="container">
            <h1>Hai {user.nama} <button className="btn btn-danger" onClick={() => userFunction.remove(setUser)} >logout</button> </h1>
        </div>
    </Navbar>
}
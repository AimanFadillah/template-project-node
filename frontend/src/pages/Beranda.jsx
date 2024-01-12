import { useContext } from "react"
import Sidebar from "../components/Sidebar"
import {removeUser} from "../functions/UserFuntion"
import DataContext from "../variabels/Context"

export default function Beranda () {
    const {user,setUser} = useContext(DataContext);

    return <Sidebar>
        <h1>Hai {user.nama} <button className="btn btn-danger" onClick={() => removeUser(setUser)} >logout</button> </h1>
    </Sidebar>
}